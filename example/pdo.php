<?php declare(strict_types=1);
/**
 * This file is part of Kite.
 *
 * @link     https://github.com/inhere
 * @author   https://github.com/inhere
 * @license  MIT
 */

use PhpComp\PdoX\PdoX;

require dirname(__DIR__) . '/test/boot.php';

$db = PdoX::create([
    'debug'    => 1,
    'host'     => 'localhost',
    'user'     => 'root',
    'password' => 'password',
    'database' => 'test',
]);

$db->on(PdoX::CONNECT, function ($db): void {
    echo "connect database success\n";
});
$db->on(PdoX::BEFORE_EXECUTE, function ($sql): void {
    echo "Will run SQL: $sql\n";
});
$db->on(PdoX::DISCONNECT, function ($db): void {
    echo "disconnect database success\n";
});

// $db->exec('CREATE DATABASE IF NOT EXISTS test DEFAULT CHARSET utf8 COLLATE utf8_general_ci');
$db->exec('CREATE TABLE IF NOT EXISTS `user` (
   `id` INT(11) NOT NULL AUTO_INCREMENT,
   `username` VARCHAR(32) NOT NULL,
   `nickname` VARCHAR(32),
   primary key(id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;');

$ret = $db->fetchAll('show tables');
var_dump($ret);
//
//$ret = $db->fetchAll('select * from user');
//var_dump($ret);

// find one
// SQL: SELECT * FROM `user` WHERE `id`= ? LIMIT 1
$ret = $db->queryOne('user', ['id' => 3], '*', [
    'fetchType' => 'assoc',
    'returnSql' => 1,
]);
var_dump($ret);

// find all
// SQL: SELECT * FROM `user` WHERE `username` like ? LIMIT 1000
$ret = $db->queryAll('user', [['username', 'like', '%tes%']], '*', [
    'fetchType' => 'assoc',
    'limit'     => 10,
    'returnSql' => 1,
]);
var_dump($ret);

// find all
// SQL: SELECT * FROM `user` WHERE `id` > ? ORDER BY createdAt ASC LIMIT 1000
$ret = $db->queryAll('user', [['id', '>', 2]], '*', [
    'fetchType' => 'assoc',
    'group'     => 'username',
    'order'     => 'createdAt ASC',
    'limit'     => '2,,10',
    'returnSql' => 1,
]);
var_dump($ret);

$ret = $db->insert('user', [
    'username' => 'tom',
    'nickname' => 'tom-nick',
], [
    'returnSql' => 1,
]);
var_dump($ret);

$ret = $db->insertBatch('user', [
    [
        'username' => 'tom',
        'nickname' => 'tom-nick',
    ],
    [
        'username' => 'tom1',
        'nickname' => 'tom-nick2',
    ],
], [
    'returnSql' => 1,
]);
var_dump($ret);

$ret = $db->update('user', ['id' => 2], [
    'username' => 'tom',
    'nickname' => 'tom-nick',
], [
    'returnSql' => 1,
]);
var_dump($ret);

$ret = $db->delete('user', ['id' => 2], [
    'returnSql' => 1,
    'limit'     => 1,
]);
var_dump($ret);

var_dump($db->getQueryLogs());
