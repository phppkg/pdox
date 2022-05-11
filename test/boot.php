<?php
/**
 * phpunit
 * OR
 * phpunit --bootstrap tests/boot.php tests
 */

error_reporting(E_ALL);
date_default_timezone_set('Asia/Shanghai');

spl_autoload_register(function ($class) {
    $file = null;

    if (0 === strpos($class, 'PhpComp\PdoX\Examples\\')) {
        $path = str_replace('\\', '/', substr($class, strlen('PhpComp\PdoX\Examples\\')));
        $file = dirname(__DIR__) . "/examples/{$path}.php";
    } elseif (0 === strpos($class, 'PhpComp\PdoX\Tests\\')) {
        $path = str_replace('\\', '/', substr($class, strlen('PhpComp\PdoX\Tests\\')));
        $file = dirname(__DIR__) . "/{$path}.php";
    } elseif (0 === strpos($class, 'PhpComp\PdoX\\')) {
        $path = str_replace('\\', '/', substr($class, strlen('PhpComp\PdoX\\')));
        $file = dirname(__DIR__) . "/src/{$path}.php";
    }

    if ($file && is_file($file)) {
        include $file;
    }
});
