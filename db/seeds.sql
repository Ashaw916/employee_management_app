USE ems_db;


INSERT INTO departments (name) VALUES ('management');
INSERT INTO departments (name) VALUES ('development');
INSERT INTO departments (name) VALUES ('support');
INSERT INTO departments (name) VALUES ('sales');
INSERT INTO departments (name) VALUES ('unassigned');
INSERT INTO departments (name) VALUES ('terminated');



INSERT INTO roles (title, salary, department_id) VALUES ('manager', 300000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('sales_team', 200000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('point_person', 200000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('developer', 150000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('unassigned', 30000, 5);
INSERT INTO roles (title, salary, department_id) VALUES ('terminated', 0, 6);


INSERT INTO employees (first_name, last_name, role_id) VALUES ('manny', 'manager', 1);
INSERT INTO employees (first_name, last_name, role_id, manager) VALUES ('dev', 'developer', 4, 1);
INSERT INTO employees (first_name, last_name, role_id, manager) VALUES ('inti', 'intern', 5, 1);
INSERT INTO employees (first_name, last_name, role_id, manager) VALUES ('sal', 'salesman', 2, 1);
INSERT INTO employees (first_name, last_name, role_id) VALUES ('terry', 'terminated', 6);



SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;