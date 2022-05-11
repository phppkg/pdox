<?php declare(strict_types=1);
/**
 * This file is part of Kite.
 *
 * @link     https://github.com/inhere
 * @author   https://github.com/inhere
 * @license  MIT
 */

namespace PhpComp\PdoX\Contract;

/**
 * Interface PdoXInterface
 *
 * @package PhpComp\PdoX\Contract
 */
interface PdoXInterface extends DBXInterface
{
    /**
     * @var array
     */
    public const SELECT_NODES = [
        // string: 'id, name'; array: ['id', 'name']
        'select',
        'from',
        // string: full join clause; array: [$table, $condition, $type = 'LEFT']
        'join',

        /** @see DBHelper::handleConditions() */
        'where',

        'having', // [$conditions, $glue = 'AND']
        'group', // 'id, name' || ['id', 'name']
        'order', // 'created ASC' || ['created', 'publish', 'DESC'] ['created ASC', 'publish DESC']
        'limit', // 10 OR [2, 10]
    ];

    /**
     * @var array
     */
    public const UPDATE_NODES = ['update', 'set', 'where', 'order', 'limit'];

    /**
     * @var array
     */
    public const DELETE_NODES = ['from', 'join', 'where', 'order', 'limit'];

    /**
     * @var array
     */
    public const QUERY_OPTIONS = [
        /* data index column. for list query and fetch in (object, column) . */
        'indexKey'  => null,

        /*
         data load type, allow:
         'object'  -- return object, instanceof the 'class'
         'column'  -- return array, only  [ 'value' ]
         'assoc'   -- return array, Contain  [ 'column' => 'value']
         */
        'fetchType' => 'assoc',
        'class'     => null, // a className. when 'fetchType' eq 'object'
    ];
}
