<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2018/5/8 0008
 * Time: 22:54
 */

namespace Inhere\LiteDb;

/**
 * Interface LitePdoInterface
 * @package Inhere\LiteDb
 */
interface LitePdoInterface extends LiteDatabaseInterface
{
    /**
     * @var array
     */
    const SELECT_NODES = [
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
    const UPDATE_NODES = ['update', 'set', 'where', 'order', 'limit'];

    /**
     * @var array
     */
    const DELETE_NODES = ['from', 'join', 'where', 'order', 'limit'];

    /**
     * @var array
     */
    const QUERY_OPTIONS = [
        /* data index column. for list query and fetch in (object, column) . */
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
}
