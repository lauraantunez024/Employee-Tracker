const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "main_db"

});



function base() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What do you want to do?",
                choices: [
                    "View All Departments",
                    "View All Roles",
                    "View All Employees",
                    "Add Department",
                    "Add Role",
                    "Add Employee",
                    "Update Employee Role",
                    "Done",
                ]
            }
        ]).then((response) => {
            switch (response.choice) {
                case "View All Departments":
                    viewDept();
                    break;
                case "View All Roles":
                    viewRoles();
                    break;
                case "View All Employees":
                    viewEmployees();
                    break;
                case "Add Department":
                    addDept();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployee();
                    break;
                default:
                    base();

            }
        });
};


function viewEmployees() {
    let query = "SELECT * FROM employee";
    connection
        .promise()
        .query(query)
        .then(([res]) => {
            console.table("All Employees:", res);
            base();
        })
};

function viewDept() {
        let query = "SELECT * FROM department";
        connection
            .promise()  
            .query(query)
            .then(([res]) => {
            console.table("All Departments:", res);
            base();      
            })
};

function viewRoles() {
    let query = "SELECT * FROM role";
    connection
        .promise()
        .query(query)
        .then(([res]) => {
            console.table("All Roles:", res);
            base();
        })
};

function addEmployee() {
    connection
        .promise()
        .query("SELECT id, title FROM role")
        .then(([results]) => {
            console.log(results);
            const roleChoices = results.map((a) => {
                return {
                    name: a.title,
                    value: a.id,
                }
            })
        }).then(() => {
            connection
                .promise()
                .query("SELECT id, first_name, last_name FROM employee")
                .then(([results]) => {
                    const managerChoices = results.map((a) => {
                        return {
                            name: `${a.first_name} ${a.last_name}`,
                            value: a.id
                        }
                    })

                })
        }).then(() => {
            inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "Enter employee's first name?",
            },
            {
                type: "input",
                name: "last_name",
                message: "Enter employee's last name",

            },
            {
                type: "list",
                name: "role_id",
                message: "Enter employee's role id",
                choices: roleChoices
            },
            {
                type: "list",
                name: "manager_id",
                message: "Enter employee's manager id",
                choices: managerChoices

            
            }
        ]).then((a) => {
            connection.query(
                "INSERT INTO employee (first_name, role_id, manager_id VALUES (?, ?, ?, ?,)",
                [
                    a.first_name,
                    a.last_name,
                    a.role_id,
                    parseInt(a.manager_id)
                ]
            );
            base();
        })
     })
};

function addRole() {
    connection
        .promise()
        .query("SELECT id, name FROM department")
        .then(([results]) => {
            console.log(results);
            deptChoice = results.map((a) => {
                return {
                    name: a.name,
                    value: a.id
                };
            });
        }).then(() => {
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "new_role",
                        message: "What is the new role?"
                    },
                    {
                        type: "input",
                        name: "new_salary",
                        message: "What is the new salary for the role?"
                    },
                    {
                        type: "list",
                        name: "new_dept",
                        message: "Choose the department for the new role?",
                        choices: deptChoice
                    }
                ])
            }).then((a) => {
                connection.query(
                    "INSERT INTO role (title, salary, department_id) VALUES (?,?,?);",
                    [a.new_role, a.new_salary, a.new_dept]
                )
                base();
            })
        }

function addDept() {

}

function updateEmployee() {

}
    


base();