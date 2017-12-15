<?php
/**
 * Created by PhpStorm.
 * User: inhere
 * Date: 2017-11-03
 * Time: 10:11
 */


use Inhere\LiteDb\ExtendedPdo;

require dirname(__DIR__) . '/tests/boot.php';

$db = ExtendedPdo::make([
    'debug' => 1,
    'user' => 'root',
    'password' => 'root',
]);

$db->on(ExtendedPdo::CONNECT, function ($db) {
    echo "connect database success\n";
});
$db->on(ExtendedPdo::BEFORE_EXECUTE, function ($sql) {
    echo "Will run SQL: $sql\n";
});
$db->on(ExtendedPdo::DISCONNECT, function ($db) {
    echo "disconnect database success\n";
});

//$ret = $db->fetchAll('show tables');
//var_dump($ret);
//
//$ret = $db->fetchAll('select * from user');
//var_dump($ret);

// find one
// SQL: SELECT * FROM `user` WHERE `id`= ? LIMIT 1
$ret = $db->findOne('user', ['id' => 3], '*', [
    'fetchType' => 'assoc',
    'dumpSql' => 1,
]);
var_dump($ret);

// find all
// SQL: SELECT * FROM `user` WHERE `username` like ? LIMIT 1000
$ret = $db->findAll('user', [ ['username', 'like', '%tes%'] ], '*', [
    'fetchType' => 'assoc',
    'limit' => 10,
    'dumpSql' => 1,
]);
var_dump($ret);

// find all
// SQL: SELECT * FROM `user` WHERE `id` > ? ORDER BY createdAt ASC LIMIT 1000
$ret = $db->findAll('user', [['id', '>', 3]], '*', [
    'fetchType' => 'assoc',
    'group' => 'username',
    'order' => 'createdAt ASC',
    'limit' => '2,,10',
    'dumpSql' => 1,
]);
var_dump($ret);

$ret = $db->insert('user', [
    'username' => 'tom',
    'nickname' => 'tom-nick',
], [
    'dumpSql' => 1,
]);
var_dump($ret);

$ret = $db->insertBatch('user',[
    [
        'username' => 'tom',
        'nickname' => 'tom-nick',
    ],
    [
        'username' => 'tom1',
        'nickname' => 'tom-nick2',
    ],
], [
    'dumpSql' => 1,
]);
var_dump($ret);

$ret = $db->update('user', ['id' => 2], [
    'username' => 'tom',
    'nickname' => 'tom-nick',
], [
    'dumpSql' => 1,
]);
var_dump($ret);

$ret = $db->delete('user', ['id' => 2], [
    'dumpSql' => 1,
    'limit' => 1,
]);
var_dump($ret);

var_dump($db->getQueryLog());
