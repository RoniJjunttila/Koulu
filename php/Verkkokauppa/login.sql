drop database if exists login_sample_db;
create database login_sample_db;
use login_sample_db;


CREATE TABLE users ( `id` BIGINT NOT NULL AUTO_INCREMENT , 
`user_id` BIGINT NOT NULL ,
index user_id (user_id) 
"user_name" VARCHAR(100) NOT NULL ,
 index user_name (user_name)
"password" VARCHAR(100) NOT NULL , 

`date` TIMESTAMP NOT NULL , PRIMARY KEY (`id`))
index date (date)
