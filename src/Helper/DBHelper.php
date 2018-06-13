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
        if (!$tablePrefix || !\strpos($sql, $prefixPlaceholder)) {
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
     * $result = $db->findAll('user', [
     *      'userId' => 23,      // ==> 'AND `userId` = 23'
     *      'title' => 'test',  // value will auto add quote, equal to "AND title = 'test'"
     *      'status' => [1, 2], // status IN (1,2)
     *
     *      ['publishTime', '>', '0'],  // ==> 'AND `publishTime` > 0'
     *      ['createdAt', '<=', 1345665427, 'OR'],  // ==> 'OR `createdAt` <= 1345665427'
     *      ['publishAt', '<=', \date('Y-m-d H:i:s')],
     *      ['id', 'IN' ,[4,5,56]],   // ==> '`id` IN ('4','5','56')'
     *      ['id', 'NOT IN', [4,5,56]], // ==> '`id` NOT IN ('4','5','56')'
     *      ['t1.name', 'like', "%tom%", 'or'],
     *      // a closure
     *      function () {
     *          return 'a < 5 OR b > 6';
     *      }
     * ]);
     * ```
     * @return array
     * @throws \InvalidArgumentException
     */
    public static function handleConditions($wheres, LitePdo $db): array
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

        $inBrackets = false;
        $nodes = $bindings = [];

        if (\is_array($wheres)) {
            foreach ($wheres as $key => $val) {
                if (\is_object($val) && $val instanceof \Closure) {
                    $val = $val($db);
                }

                $key = \trim($key);

                if ($val === '(') {
                    $nodes[] = \preg_match('/^and|or$/i', $key) ? \strtoupper($key) : 'AND';
                    $nodes[] = '(';
                    $inBrackets = true;
                    continue;
                }

                if ($val === ')') {
                    $nodes[] = ')';
                    $inBrackets = false;
                    continue;
                }

                $valIsArray = \is_array($val);

                // $key is column name, $val is column value
                if ($key && !\is_numeric($key)) {
                    $bool = 'AND ';

                    if ($inBrackets) {
                        $bool = '';
                        $inBrackets = false;
                    }

                    if ($valIsArray) {
                        $nodes[] = $bool . self::formatArrayValue($db->qn($key), $val, 'IN');
                        continue;
                    }

                    $nodes[] = $bool . $db->qn($key) . '= ?';
                    $bindings[] = $val;

                    // array: [column, operator(e.g '=', '>=', 'IN'), value, option(Is optional, e.g 'AND', 'OR')]
                } elseif ($valIsArray) {
                    if (!isset($val[2])) {
                        throw new \InvalidArgumentException('Where condition data is incomplete, at least 3 elements');
                    }

                    $bool = \strtoupper($val[3] ?? 'AND');

                    if ($inBrackets) {
                        $bool = '';
                        $inBrackets = false;
                    }

                    if (\is_array($val[2])) {
                        $nodes[] = $bool . self::formatArrayValue($db->qn($val[0]), $val[2], $val[1]);
                        continue;
                    }

                    $nodes[] = $bool . ' ' . $db->qn($val[0]) . " {$val[1]} ?";

                    if (\strtoupper($val[1]) === 'LIKE') {
                        $bindings[] = "'{$val[2]}'";
                    } else {
                        $bindings[] = $val[2];
                    }
                } elseif (\is_string($val)) {
                    $bool = 'AND ';

                    if ($inBrackets) {
                        $bool = '';
                        $inBrackets = false;
                    }

                    $val = \trim($val);
                    $nodes[] = \preg_match('/^and |or /i', $val) ? $val : $bool . $val;
                }
            }
        }

        $whereStr = \implode(' ', $nodes);
        unset($nodes);

        return [self::removeLeadingBoolean($whereStr), $bindings];
    }

    /**
     * handle IN/NOT IN
     * @param string $col
     * @param array $val
     * @param string $op
     * @return string
     */
    private static function formatArrayValue(string $col, array $val, string $op): string
    {
        return \sprintf(" %s %s ('%s')", $col, $op, \implode("','", $val));
    }
}
