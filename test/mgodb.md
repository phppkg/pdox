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
