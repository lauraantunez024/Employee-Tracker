DROP DATABASE IF EXISTS main_db;
CREATE DATABASE main_db;

USE employee info;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAT(30) NOT NULL,
    PRIMARY KEY(id),
    UNIQUE(name)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAT(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (department_id) 
    REFERENCES department(id),
    UNIQUE(title)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAT(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY(id),
    FOREIGN KEY (role_id) 
    REFERENCES role(id),
    ON DELETE SET NULL
);