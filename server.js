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
    mainApp();
}

function welcomeScreen() {
    console.log("What's up!")
}

function mainApp() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
                message: "What do you want to do?",
                choices: [
                    "choice 1",
                    "choice 2",
                ]
            }
        ])
}