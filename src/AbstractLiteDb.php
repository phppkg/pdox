<?php
/**
 * Created by PhpStorm.
 * User: Inhere
 * Date: 2017/12/15 0015
 * Time: 23:36
 */

namespace Inhere\LiteDb;

/**
 * Class AbstractLiteDb
 * @package Inhere\LiteDb
 */
abstract class AbstractLiteDb implements LiteDatabaseInterface
{
    use ConfigAndEventAwareTrait;

    /**
     * @param array $config
     * @return static
     */
    public static function make(array $config = [])
    {
        return new static($config);
    }

    /**
     * @param array $config
     */
    public function __construct(array $config = [])
    {
        $this->setConfig($config);
    }

    /**
     * __destruct
     */
    public function __destruct()
    {
        $this->disconnect();
    }

}
