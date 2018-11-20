# simple db client

[![License](https://img.shields.io/packagist/l/inhere/console.svg?style=flat-square)](LICENSE)
[![Php Version](https://img.shields.io/badge/php-%3E=7.0-brightgreen.svg?maxAge=2592000)](https://packagist.org/packages/php-comp/lite-db)
[![Latest Stable Version](http://img.shields.io/packagist/v/php-comp/lite-db.svg)](https://packagist.org/packages/php-comp/lite-db)

Simple database client for mysql,sqlite by PDO

- **github** https://github.com/php-comp/lite-database.git

## Install

- By composer require

```bash
composer require php-comp/lite-db
```

- By composer.json

```json
{
    "require": {
        "php-comp/lite-db": "~1.0.0"
    }
}
```

- Pull directly

```bash
git clone https://github.com/php-comp/lite-database.git
```

## Usage

### create connection

```php
$db = LitePdo::create([
    // open debug, will record query logs.
    'debug' => 1,
    
    'driver' => 'mysql', // 'sqlite' 'pgsql' 'mssql'
    'host' => 'localhost',
    'user' => 'root',
    'password' => 'password',
    'database' => 'test',
]);

// add event listeners.

$db->on(LitePdo::CONNECT, function ($db) {
    echo "connect database success\n";
});
$db->on(LitePdo::BEFORE_EXECUTE, function ($sql) {
    echo "Will run SQL: $sql\n";
});
$db->on(LitePdo::DISCONNECT, function ($db) {
    echo "disconnect database success\n";
});
```

### basic

```php
$db->exec('CREATE TABLE IF NOT EXISTS `user` (
   `id` INT(11) NOT NULL AUTO_INCREMENT,
   `username` VARCHAR(32) NOT NULL,
   `nickname` VARCHAR(32),
   primary key(id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;');

// fetch all
$ret = $db->fetchAll('show tables');
var_dump($ret);
```

### insert

```php
// insert one
$ret = $db->insert('user', [
    'username' => 'tom',
    'nickname' => 'tom-nick',
], [
    'returnSql' => 1,
]);
var_dump($ret);

// batch insert
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
    'returnSql' => 1,
]);
var_dump($ret);
```

### query

```php
// find one
// SQL: SELECT * FROM `user` WHERE `id`= ? LIMIT 1
$ret = $db->queryOne('user', ['id' => 3], '*', [
    'fetchType' => 'assoc',
    'returnSql' => 1,
]);
var_dump($ret);


// find all
// SQL: SELECT * FROM `user` WHERE `username` like ? LIMIT 1000
$ret = $db->queryAll('user', [ ['username', 'like', '%tes%'] ], '*', [
    'fetchType' => 'assoc',
    'limit' => 10,
    'returnSql' => 1,
]);
var_dump($ret);

// more conditions
$ret = $db->queryAll('user', [
     'userId' => 23,      // 'AND `userId` = 23'
     'title' => 'test',  // value will auto add quote, equal to "AND title = 'test'"
     'status' => [1, 2], // status IN (1,2)
     
     ['publishAt', '>', '0'],  // ==> 'AND `publishAt` > 0'
     ['createdAt', '<=', 1345665427, 'OR'],  // ==> 'OR `createdAt` <= 1345665427'
     ['id', 'IN' ,[4,5,56]],   // ==> '`id` IN ('4','5','56')'
     ['id', 'NOT IN', [4,5,56]], // ==> '`id` NOT IN ('4','5','56')'
     
     // a closure
     function () {
         return 'a < 5 OR b > 6';
     }
]);

// SQL: SELECT * FROM `user` WHERE "name"= ? OR ( "type"= ? AND "createAt" <= ? ) AND "status" IN ('1','2')
$ret = $db->queryAll('user', [
  'name' => 'tom',
  'or' => '(',
  'type' => 'admin',
  ['createAt', '<=', \date('Y-m-d H:i:s')],
  ')',
  'status' => [1,2]
]);
```

### update

```php
$ret = $db->update('user', ['id' => 2], [
    'username' => 'tom',
    'nickname' => 'tom-nick',
], [
    'returnSql' => 1,
]);
var_dump($ret);
```

### delete

```php
$ret = $db->delete('user', ['id' => 2], [
    'returnSql' => 1,
    'limit' => 1,
]);
var_dump($ret);
```

### get query logs

```php
var_dump($db->getQueryLogs());
```

## mongoDB

> un-completed

### requirements

- install php ext `pecl install mongodb`
- install php lib 

```bash
composer require mongodb/mongodb
```

### create connection

```php
$mgo = LiteMongo::create([
    'debug' => 1,
    'server' => 'mongodb1.example.com:27317,mongodb2.example.com:27017/admin',
    'user' => 'root',
    'password' => 'password',
    'database' => 'userDatabase',
    // uriOptions
    'uriOptions' => [],
    // mongodb options
    'driverOptions' => [],
]);
/*
 conn str example:
 mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[authDb][?options]]
 */
```

more see 

- https://secure.php.net/manual/zh/mongodb-driver-manager.construct.php
- https://docs.mongodb.com/php-library/current/

add events listen:

```php
$db->on(LiteMongo::CONNECT, function ($db) {
    echo "connect database success\n";
});
$db->on(LiteMongo::BEFORE_EXECUTE, function ($sql) {
    echo "Will run SQL: $sql\n";
});
```

### insert

```php
$result = $mgo->insert('collection', [
    'col1' => 'val1'
]);

$manyResult = $mgo->insertBatch('collection', [
    [
        'username' => 'admin',
        'email' => 'admin@example.com',
        'name' => 'Admin User',
    ],
    [
        'username' => 'test',
        'email' => 'test@example.com',
        'name' => 'Test User',
    ],
]);
```

### query

```php
$mgo->queryOne(['_id' => 'd4df6']);
```

## Methods docs

> https://inhere.github.io/php-lite-database/classes/master/Inhere/LiteDb/LitePdo.html

## License 

MIT
