INSERT INTO departments (name)
VALUES ("Sales"),
    ("Legal"),
    ("Engineering");
INSERT INTO roles (title, salary, department_id, roles_id)
VALUES ("Director of Sales", 145000.00, 1, 1),
    ("Enterprise Account Executive", 115000.00, 1, 2),
    ("Mid-Market Account Executive", 95000.00, 1, 3),
    ("General Council", 150000.00, 2, 4),
    ("Senior Engineer", 125000.00, 3, 5),
    ("Junior Engineer", 90000.00, 3, 6);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, null),
    ("Roderick", "Bailey", 2, 1),
    ("Rhonda", "Hart", 3, 1),
    ("Inez", "West", 4, null),
    ("Melody", "McDaniel", 5, null),
    ("Bruce", "Marshall", 6, 5);