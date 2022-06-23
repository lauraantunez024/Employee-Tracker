const inquirer = require("inquirer");
const mysql = require ("mysql2");
const cTable = require("console.table");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "main_db"

});

function start() {
    Welcome();
    base();
}

function welcomeScreen() {
    console.log("What's up!")
}

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
                    "Update Employee",
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
                    addEmployees();
                    break;
                default:
                    done();

            }
        });

}


function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "Enter employee's first name?",
                validate: (a) => {
                    if (!a) {
                        return "Please enter first name"
                    }
                    return true;
                },
            },
            {
                type: "input",
                name: "last_name",
                message: "Enter employee's last name",
                validate: (a) => {
                    if (!a) {
                        return "Please enter last name"
                    }
                    return true;
                },
            },
        
            {
                type: "input",
                name: "role_id",
                message: "Enter employee's role id",
                validate: (a) => {
                    if (!a) {
                        return "Please enter role id"
                    }
                    return true;
                },
            },
    
            {
                type: "input",
                name: "manager_id",
                message: "Enter employee's manager id",
                validate: (a) => {
                    if (!a) {
                        return "Please enter first name"
                    }
                    return true;
                },
            }
])

}