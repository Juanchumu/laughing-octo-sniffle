-- crea la base de datos personas_db
create database personas_db;

-- 
use personas_db;

create table personas(
	id int not null primary key auto_increment,
    nombre varchar(50) not null,
    apellido varchar(50),
    localidad varchar(50),
    nacimiento timestamp,
    created_at timestamp default CURRENT_TIMESTAMP
);

DESCRIBE personas;
