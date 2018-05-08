# simple db client

[![License](https://img.shields.io/packagist/l/inhere/console.svg?style=flat-square)](LICENSE)
[![Php Version](https://img.shields.io/badge/php-%3E=7.0-brightgreen.svg?maxAge=2592000)](https://packagist.org/packages/inhere/lite-db)
[![Latest Stable Version](http://img.shields.io/packagist/v/inhere/lite-db.svg)](https://packagist.org/packages/inhere/lite-db)

Simple database client for mysql,sqlite by PDO

## Projects

- **github** https://github.com/inhere/php-lite-database.git
- **gitee** https://gitee.com/inhere/php-lite-database.git

## Install

- By composer require

```bash
composer require inhere/lite-db
```

- By composer.json

```json
{
    "require": {
        "inhere/lite-db": "~1.0.0"
    }
}
```

- Pull directly

```bash
git clone https://github.com/inhere/php-lite-database.git
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

## Methods docs

> https://inhere.github.io/php-lite-database/classes/master/Inhere/LiteDb/LitePdo.html

## License 

MIT
