<?php declare(strict_types=1);
/**
 * This file is part of Kite.
 *
 * @link     https://github.com/inhere
 * @author   https://github.com/inhere
 * @license  MIT
 */

namespace PhpComp\PdoX;

use PhpComp\PdoX\Contract\DBXInterface;
use function extension_loaded;

/**
 * Class MgoX - for mongodb database
 *
 * @package PhpComp\PdoX
 */
class MgoX implements DBXInterface
{
    use ConfigAndEventAwareTrait;

    const DRIVER_MONGO    = 'mongo';

    const DRIVER_MONGO_DB = 'mongodb';

    private $mgo;

    /**
     * @var array
     */
    protected $config = [
        'url'      => '',
        'database' => ''
    ];

    /**
     * Is this driver supported.
     *
     * @param string $driver
     *
     * @return bool
     */
    public static function isSupported(string $driver): bool
    {
        if ($driver === self::DRIVER_MONGO_DB) {
            return extension_loaded('mongodb');
        }

        if ($driver === self::DRIVER_MONGO) {
            return extension_loaded('mongo');
        }

        return false;
    }

    /**
     * connect
     */
    public function connect(): void
    {
        if ($this->mgo) {
            return;
        }
    }

    /**
     * reconnect
     */
    public function reconnect(): void
    {
        $this->mgo = null;
        $this->connect();
    }

    /**
     * disconnect
     */
    public function disconnect(): void
    {
        $this->fire(self::DISCONNECT, [$this]);
        $this->mgo = null;
    }

    /**
     * @return bool
     */
    public function isConnected(): bool
    {
        return (bool)$this->mgo;
    }
}
