USE main_db;

INSERT INTO
    department(name)
VALUES
    ('Product'),
    ('DevOps'),
    ('Integrations'),
    ('Quality Assurance'),
    ('Client Success');

INSERT INTO role (title, salary, department_id)
VALUES
('Product Team Lead', 75000, 1)
('Product Web Developer', 50000, 1)
('DevOps Team Lead', 80000, 2)
('Devops Engineer', 60000, 2)
('Integrations Project Lead', 55000, 3)
('Quality Assurance Analyst', 50000, 4)
('Junior Quality Assurance Analyst', 45000, 4)
('Client Success Manager', 40000, 5)
('Client Success Representative', 35000, 5)

INSERT INTO employee (first_name, last_name, role_id, manager_id)

('Gerald', 'Ford', 3, null)
('George', 'Washington', 4, 6)
('Abraham', 'Lincoln', 5, 8)
('Ronald', 'Reagan', 1, 7)
('Richard', 'Nixon', 3, null)
('John', 'Kennedy', 2, 6)
('Jimmy', 'Carter', 1, 9)
('Bill', 'Clinton', 3, null)
('George', 'Bush', 5, 9)
('Howard', 'Taft', 3, 7)
('John', 'Adams', 4, 8)
