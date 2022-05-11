<?php declare(strict_types=1);

namespace PhpComp\PdoX\Component;

use PDO;

/**
 * class Table
 *
 * @author inhere
 * @date 2022/5/10
 */
class Table
{
    private ?PDO $pdo;

    public static function new(PDO $pdo): self
    {
        return new self($pdo);
    }

    public function __construct(?PDO $pdo)
    {
        $this->pdo = $pdo;
    }
}
