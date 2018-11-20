<?php
/**
 * Created by PhpStorm.
 * User: inhere
 * Date: 2018-05-10
 * Time: 12:02
 */

namespace PhpComp\LiteDb\Builder;

use PDO;

/**
 * Class ExtendedMgo - for mongodb database
 * @package PhpComp\LiteDb
 */
class PdoBuilder
{
    /**
     * @var array
     */
    const SELECT_NODES = [
        // string: 'id, name'; array: ['id', 'name']
        'select',
        // 'DISTINCT'
        'option',
        // string: 'my-table', 'table as alias'
        // array: ['table', 'alias']
        'from',
        // string: full join clause;
        // array: [$table, $condition, $type = 'LEFT']
        'join',

        /** @see DBHelper::handleConditions() */
        'where',

        // [$conditions, $glue = 'AND']
        'having',
        // 'id, name' || ['id', 'name']
        'group',
        // 'created ASC' || ['created', 'publish', 'DESC'] ['created ASC', 'publish DESC']
        'order',
        // '10' OR '1,20' OR [2, 10]
        'limit',
    ];

    /**
     * @var array
     */
    const UPDATE_NODES = ['update', 'set', 'where', 'order', 'limit'];

    /**
     * @var array
     */
    const DELETE_NODES = ['from', 'join', 'where', 'order', 'limit'];

    /**
     * @var array
     */
    const QUERY_OPTIONS = [
        /* data index column. for list query. */
        'indexKey' => null,

        /*
         data load type, allow:
         'object'  -- return object, instanceof the 'class'
         'column'  -- return array, only  [ 'value' ]
         'assoc'   -- return array, Contain  [ 'column' => 'value']
         */
        'fetchType' => 'assoc',
        'class' => null, // a className. when 'fetchType' eq 'object'
    ];

    /**
     * PDO database connection to use in executing the statement.
     * @var PDO|null
     */
    private $pdo;

    /**
     * Whether to automatically escape values.
     * @var bool|null
     */
    private $autoQuote;

    /**
     * SQL nodes
     * @var array
     */
    private $nodes = [];

    /**
     * @param PDO|null $pdo
     * @param bool $autoQuote
     * @return Miner
     */
    public static function create(PDO $pdo = null, bool $autoQuote = true): self
    {
        return new self($pdo, $autoQuote);
    }

    /**
     * Constructor.
     * @param  PDO|null $pdo optional PDO database connection
     * @param  bool $autoQuote optional auto-escape values, default true
     */
    public function __construct(PDO $pdo = null, bool $autoQuote = true)
    {
        $this->nodes = [];

        $this->setPdo($pdo)->setAutoQuote($autoQuote);
    }

    /**
     * Set the PDO database connection to use in executing this statement.
     * @param  PDO|null $pdo optional PDO database connection
     * @return Miner
     */
    public function setPdo(PDO $pdo = null): self
    {
        $this->pdo = $pdo;

        return $this;
    }

    /**
     * Get the PDO database connection to use in executing this statement.
     * @return PDO|null
     */
    public function getPdo()
    {
        return $this->pdo;
    }

    /**
     * Set whether to automatically escape values.
     * @param  bool|null $autoQuote whether to automatically escape values
     * @return Miner
     */
    public function setAutoQuote($autoQuote): self
    {
        $this->autoQuote = $autoQuote;
        return $this;
    }

    /**
     * Get whether values will be automatically escaped.
     * The $override parameter is for convenience in checking if a specific
     * value should be quoted differently than the rest. 'null' defers to the
     * global setting.
     * @param  bool|null $override value-specific override for convenience
     * @return bool
     */
    public function getAutoQuote($override = null): bool
    {
        return $override ?? $this->autoQuote;
    }

    /**
     * Safely escape a value if auto-quoting is enabled, or do nothing if
     * disabled.
     * The $override parameter is for convenience in checking if a specific
     * value should be quoted differently than the rest. 'null' defers to the
     * global setting.
     * @param  mixed $value value to escape (or not)
     * @param  bool|null $override value-specific override for convenience
     * @return mixed|false value (escaped or original) or false if failed
     */
    public function autoQuote($value, $override = null)
    {
        return $this->getAutoQuote($override) ? $this->quote($value) : $value;
    }

    /**
     * Safely escape a value for use in a statement.
     * @param  mixed $value value to escape
     * @return mixed|false escaped value or false if failed
     */
    public function quote($value)
    {
        // If a PDO database connection is set, use it to quote the value using
        // the underlying database. Otherwise, quote it manually.
        if ($pdo = $this->getPdo()) {
            return $pdo->quote($value);
        }

        if (\is_numeric($value)) {
            return $value;
        }

        if (null === $value) {
            return 'NULL';
        }

        return "'" . \addslashes($value) . "'";
    }

    /**************************************************************************
     * operation methods
     *************************************************************************/

    /**
     * Add a SELECT column, table, or expression with optional alias.
     * @param  string|array $column column name, table name, or expression
     * @param  string $alias optional alias
     * @return Miner
     */
    public function select($column, string $alias = null): self
    {
        if (\is_string($column)) {
            if (\strpos($column, ',')) {
                $this->select = \array_merge($this->select, \array_filter(\explode(',', $column)));
            } else {
                $this->select[$column] = $alias;
            }
        } elseif (\is_array($column)) {
            foreach ($column as $col => $ali) {
                if (\is_numeric($col)) {
                    $this->select[$ali] = null;
                } else {
                    $this->select[$col] = $ali;
                }
            }
        }

        return $this;
    }

    /**************************************************************************
     * setting statement nodes
     *************************************************************************/

    /**
     * @param  string $method
     * @param  array  $args
     * @return $this
     */
    public function __call(string $method, array $args)
    {
        if (\in_array($method, self::SELECT_NODES, true)) {
            $this->nodes[$method] = $args;
        }
    }

    /**
     * Whether this is a SELECT statement.
     * @return bool whether this is a SELECT statement
     */
    public function isSelect(): bool
    {
        return !empty($this->nodes['select']);
    }

    /**************************************************************************
     * build statement methods
     *************************************************************************/

    /**
     * @param array $nodes
     * @return string
     */
    public function compileSelect(array $nodes): string
    {
        return $this->compileNodes(self::SELECT_NODES, $nodes);
    }

    /**
     * @param $from
     * @param array $data
     * @param array $columns
     * @param bool $isBatch
     * @return array
     */
    public function compileInsert(string $from, array $data, array $columns = [], $isBatch = false): array
    {
        $sql = 'INSERT INTO ';
        $bindings = [];
        $sql .= $this->qn($from);

        if (!$isBatch) {
            $bindings = \array_values($data);
            $nameStr = $this->qns(\array_keys($data));
            $valueStr = '(' . rtrim(\str_repeat('?,', \count($data)), ',') . ')';
        } else {
            if ($columns) {
                $columnNum = \count($columns);
                $nameStr = $this->qns($columns);
            } else {
                $columnNum = \count($data[0]);
                $nameStr = $this->qns(\array_keys($data[0]));
            }

            $valueStr = '';
            $rowTpl = '(' . rtrim(\str_repeat('?,', $columnNum), ',') . '), ';

            foreach ($data as $row) {
                $bindings = \array_merge($bindings, \array_values($row));
                $valueStr .= $rowTpl;
            }

            $valueStr = \rtrim($valueStr, ', ');
        }

        $sql .= " ({$nameStr}) VALUES {$valueStr}";

        return [$sql, $bindings];
    }

    /**
     *
     * @param array $updates
     * @param array $bindings
     * @param array $options
     * @return string
     */
    public function compileUpdate(array $updates, array &$bindings, array $options): string
    {
        $nodes = $values = [];

        foreach ($updates as $column => $value) {
            if (\is_int($column)) {
                continue;
            }

            $nodes[] = $this->qn($column) . '= ?';
            $values[] = $value;
        }

        $options['set'] = \implode(',', $nodes);
        $bindings = \array_merge($values, $bindings);

        return $this->compileNodes(self::UPDATE_NODES, $options);
    }

    /**
     * @param array $options
     * @return string
     */
    public function compileDelete(array $options): string
    {
        return 'DELETE ' . $this->compileNodes(self::DELETE_NODES, $options);
    }

    /**
     * @param array $commandNodes
     * @param array $data
     * @return string
     */
    public function compileNodes(array $commandNodes, array $data): string
    {
        $nodes = [];

        foreach ($commandNodes as $node) {
            if (!isset($data[$node])) {
                continue;
            }

            $val = $data[$node];
            if ($isString = \is_string($val)) {
                $val = trim($val);
            }

            if ($node === 'option') {
                $nodes[] = $isString ? $val : \implode(',', (array)$val);
            } elseif ($node === 'join') {
                //string: full join structure. e.g 'left join TABLE t2 on t1.id = t2.id'
                if ($isString) {
                    $nodes[] = \stripos($val, 'join') !== false ? $val : 'LEFT JOIN ' . $val;

                    // array: ['TABLE t2', 't1.id = t2.id', 'left']
                } elseif (\is_array($val)) {
                    $nodes[] = ($val[2] ?? 'LEFT') . " JOIN {$val[0]} ON {$val[1]}";
                }
            } elseif ($node === 'having') {
                // string: 'having AND col = val'
                if ($isString) {
                    $nodes[] = \stripos($val, 'having') !== false ? $val: 'HAVING ' . $val;

                    // array: ['t1.id = t2.id', 'AND']
                } elseif (\is_array($val)) {
                    $nodes[] = 'HAVING ' . ($val[1] ?? 'AND') . " {$val[0]}";
                }
            } elseif ($node === 'group') {
                $nodes[] = 'GROUP BY ' . $this->qns($val);
            } elseif ($node === 'order') {
                $nodes[] = 'ORDER BY ' . ($isString ? $val : \implode(' ', $val));
                continue;
            } else {
                $nodes[] = \strtoupper($node) . ' ' . ($isString ? $val : \implode(',', (array)$val));
            }

        }

        return \implode(' ', $nodes);
    }
}
