CREATE DATABASE core_master_db;
use core_master_db;

CREATE TABLE `article` (
  `article_id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `subject` text NOT NULL,
  `contents` text NOT NULL,
  `user_id` tinyint(3) unsigned NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

CREATE TABLE `user_master` (
  `user_id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` text NOT NULL,
  `password` text NOT NULL,
  `photo` blob,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

GRANT ALL PRIVILEGES ON *.* TO root@'%' IDENTIFIED BY 'root ' WITH GRANT OPTION;
use mysql;
update user set password=PASSWORD("root") where User='root';
flush privileges;