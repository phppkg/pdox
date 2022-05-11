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
 * Interface LiteDatabaseInterface
 *
 * @package PhpComp\PdoX\Contract
 */
interface DBXInterface
{
    // events
    public const CONNECT    = 'db.connect';

    public const DISCONNECT = 'db.disconnect';

    // will provide ($sql, $type, $data)
    // $sql - executed SQL
    // $type - operate type.  e.g 'insert'
    // $data - data
    public const BEFORE_EXECUTE = 'db.execute.before';

    public const AFTER_EXECUTE  = 'db.execute.after';

    /**
     * connect to db server
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
     *
     * @param string $driver
     *
     * @return bool
     */
    public static function isSupported(string $driver): bool;
}
