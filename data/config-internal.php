<?php
return [
  'database' => [
    'driver' => 'pdo_mysql',
    'host' => 'localhost',
    'port' => '',
    'charset' => 'utf8mb4',
    'dbname' => 'crm',
    'user' => 'shawon',
    'password' => 'admin'
  ],
  'logger' => [
    'path' => 'data/logs/espo.log',
    'level' => 'WARNING',
    'rotation' => true,
    'maxFileNumber' => 30,
    'printTrace' => false
  ],
  'restrictedMode' => false,
  'webSocketMessager' => 'ZeroMQ',
  'isInstalled' => true,
  'microtimeInternal' => 1659633977.361651,
  'passwordSalt' => 'c4eb7e4886cd7e5c',
  'cryptKey' => '7af617030af3d8652401d3b05dc111ab',
  'hashSecretKey' => 'db4e84109b4b363a5b15bb140835425c',
  'actualDatabaseType' => 'mariadb',
  'actualDatabaseVersion' => '10.4.24'
];
