use employees_db;

INSERT INTO department
    (name)
VALUES
    ('Finance'),
    ('IT'),
    ('Legal'),
    ('Sales');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Auditor', 30000, 1),
    ('Accountant', 30000, 1),
    ('IT Project Manager', 40000, 2),
    ('Software Engineer', 40000, 2),
    ('Legal Advisor', 50000, 3),
    ('Lawyer', 50000, 3),
    ('Sales Representative', 60000, 4),
    ('Sales Consultant', 60000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Bernthal', 1, NULL),
    ('Ben', 'Affleck', 2, 1),
    ('Eve', 'Laffoley', 3, NULL),
    ('Jackie', 'Rayman', 4, 3),
    ('Marvin', 'Bailey', 5, NULL),
    ('Jahmaal', 'Fyffe', 6, 5),
    ('Courtney', 'Freckleton', 7, NULL),
    ('Jamel', 'Bousbaa', 8, 7);