<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2017/12/15 0015
 * Time: 23:35
 */

namespace Inhere\LiteDb;

/**
 * Interface LiteDatabaseInterface
 * @package Inhere\LiteDb
 */
interface LiteDatabaseInterface
{
    // events
    const CONNECT = 'db.connect';
    const DISCONNECT = 'db.disconnect';

    // will provide ($sql, $type, $data)
    // $sql - executed SQL
    // $type - operate type.  e.g 'insert'
    // $data - data
    const BEFORE_EXECUTE = 'db.beforeExecute';
    const AFTER_EXECUTE = 'db.afterExecute';

    /**
     * connect to db server
     * @return $this
     */
    public function connect();

    /**
     * reconnect
     */
    public function reconnect();

    /**
     * disconnect
     */
    public function disconnect();

    /**
     * @return bool
     */
    public function isConnected(): bool;

    /**
     * Is this driver supported.
     * @param string $driver
     * @return bool
     */
    public static function isSupported(string $driver);
}
