USE main_db;

INSERT INTO department (name)
VALUE 
('Product'),
('DevOps'),
('Integrations'),
('Quality Assurance'),
('Client Success');


INSERT INTO role (title, salary, department_id)
VALUE
('Prod Team Lead', 75000, 1),
('Products Web Developer', 50000, 1),
('Dev Team Lead', 80000, 2),
('Devops Engineer', 60000, 2),
('Integrations Project Lead', 55000, 3),
('Quality Assurance Analyst', 50000, 4),
('Junior Quality Assurance Analyst', 45000, 4),
('Client Manager', 40000, 5),
('Clients Success Representative', 35000, 5);




INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE
('Gerald', 'Ford', 3, 4),
('George', 'Washington', 4, 5),
('Abraham', 'Lincoln', 5, 8),
('Ronald', 'Reagan', 1, 7),
('Richard', 'Nixon', 3, 5),
('John', 'Kennedy', 2, 6),
('Jimmy', 'Carter', 1, 9),
('Bill', 'Clinton', 3, 4),
('George', 'Bush', 8, 9),
('Howard', 'Taft', 3, 6),
('John', 'Adams', 14, 13);



