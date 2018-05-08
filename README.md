# simple db client

simple db client for pdo, mongo

## 项目地址

- **github** https://github.com/inhere/php-lite-database.git
- **git@osc** https://gitee.com/inhere/php-lite-database.git

## 安装

- composer 命令

```php
composer require inhere/lite-db
```

- composer.json

```json
{
    "require": {
        "inhere/lite-db": "dev-master"
    }
}
```

- 直接拉取

```bash
git clone https://github.com/inhere/php-lite-database.git
```

## usage

### create connection

```php
$db = LitePdo::create([
    'debug' => 1,
    'host' => 'localhost',
    'user' => 'root',
    'password' => 'password',
    'database' => 'test',
]);

// add event listen.

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

## License 

MIT
