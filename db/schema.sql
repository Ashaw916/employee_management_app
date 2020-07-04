 DROP DATABASE IF EXISTS ems_db;

CREATE DATABASE ems_db;

USE ems_db;

-- first_name, last_name, title, department, salary, manager
DROP TABLE IF EXISTS departments;
CREATE TABLE departments(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30),
PRIMARY KEY (id)
);
DROP TABLE IF EXISTS roles;
CREATE TABLE roles(
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL,
department_id INT DEFAULT null,
FOREIGN KEY (department_id) REFERENCES departments(id),
PRIMARY KEY (id)
);
DROP TABLE IF EXISTS employees;
CREATE TABLE employees(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT  DEFAULT null,
FOREIGN KEY (role_id) REFERENCES roles(id),
manager INT DEFAULT null,
PRIMARY KEY (id)
);