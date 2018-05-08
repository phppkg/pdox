<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2018/5/8 0008
 * Time: 22:30
 */

namespace Inhere\LiteDb\Helper;

use Inhere\LiteDb\LitePdo;

/**
 * Class DBHelper
 * @package Inhere\LiteDb\Helper
 */
class DBHelper
{

    /**************************************************************************
     * helper methods for pdo driver
     *************************************************************************/

    /**
     * @param string $sql
     * @param string $tablePrefix
     * @param string $prefixPlaceholder
     * @return mixed
     */
    public static function replaceTablePrefix(string $sql, string $tablePrefix, string $prefixPlaceholder)
    {
        if (!$tablePrefix || \strpos($sql, $prefixPlaceholder)) {
            return \trim($sql);
        }

        return \str_replace($prefixPlaceholder, $tablePrefix, \trim($sql));
    }

    /**
     * Remove the leading boolean from a statement.
     * @param  string $value
     * @return string
     */
    public static function removeLeadingBoolean($value): string
    {
        return \preg_replace('/^and |or /i', '', $value, 1);
    }

    /**
     * @param string $sql
     * @return string
     */
    public static function detectOperationName(string $sql): string
    {
        if ($position = \strpos($sql, ' ')) {
            return \substr($sql, 0, $position);
        }

        return 'unknown';
    }

    /**
     * handle where condition
     * @param array|string|\Closure|mixed $wheres
     * @param LitePdo $db
     * @example
     * ```
     * ...
     * $result = $db->findAll('user', [
     *      'userId' => 23,      // ==> 'AND `userId` = 23'
     *      'title' => 'test',  // value will auto add quote, equal to "AND title = 'test'"
     *
     *      ['publishTime', '>', '0'],  // ==> 'AND `publishTime` > 0'
     *      ['createdAt', '<=', 1345665427, 'OR'],  // ==> 'OR `createdAt` <= 1345665427'
     *      ['id', 'IN' ,[4,5,56]],   // ==> '`id` IN ('4','5','56')'
     *      ['id', 'NOT IN', [4,5,56]], // ==> '`id` NOT IN ('4','5','56')'
     *      // a closure
     *      function () {
     *          return 'a < 5 OR b > 6';
     *      }
     * ]);
     * ```
     * @return array
     * @throws \InvalidArgumentException
     */
    public static function handleConditions($wheres, $db): array
    {
        if (\is_object($wheres) && $wheres instanceof \Closure) {
            $wheres = $wheres($db);
        }

        if (!$wheres || $wheres === 1) {
            return [1, []];
        }

        if (\is_string($wheres)) {
            return [$wheres, []];
        }

        $nodes = $bindings = [];

        if (\is_array($wheres)) {
            foreach ($wheres as $key => $val) {
                if (\is_object($val) && $val instanceof \Closure) {
                    $val = $val($db);
                }

                $key = trim($key);

                // string key: $key is column name, $val is column value
                if ($key && !\is_numeric($key)) {
                    $nodes[] = 'AND ' . $db->qn($key) . '= ?';
                    $bindings[] = $val;

                    // array: [column, operator(e.g '=', '>=', 'IN'), value, option(Is optional, e.g 'AND', 'OR')]
                } elseif (\is_array($val)) {
                    if (!isset($val[2])) {
                        throw new \InvalidArgumentException('Where condition data is incomplete, at least 3 elements');
                    }

                    $bool = $val[3] ?? 'AND';
                    $nodes[] = \strtoupper($bool) . ' ' . $db->qn($val[0]) . " {$val[1]} ?";
                    $bindings[] = $val[2];
                } else {
                    $val = trim((string)$val);
                    $nodes[] = \preg_match('/^and |or /i', $val) ? $val : 'AND ' . $val;
                }
            }
        }

        $where = \implode(' ', $nodes);
        unset($nodes);

        return [self::removeLeadingBoolean($where), $bindings];
    }
}
