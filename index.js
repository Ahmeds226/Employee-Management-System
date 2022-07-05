const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const db = require("./db/connections");
require("console.table");

// Main menu and below are the options the user can pick.
function letsStart() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View all Departments",
          value: "viewAllDepartments",
        },
        {
          name: "View all Roles",
          value: "viewAllRoles",
        },
        {
          name: "View all Employees",
          value: "viewAllEmployees",
        },
        {
          name: "Add a new Department",
          value: "addDepartment",
        },
        {
          name: "Add a new Role",
          value: "addRole",
        },
        {
          name: "Add a new Employee",
          value: "addEmployee",
        },
        {
          name: "Update an existing Employee Role",
          value: "updateEmployeeRole",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
      case "viewAllDepartments":
        viewAllDepartments();
        break;
      case "viewAllRoles":
        viewAllRoles();
        break;
      case "viewAllEmployees":
        viewAllEmployees();
        break;
      case "addDepartment":
        addDepartment();
        break;
      case "addRole":
        addNewRole();
        break;
      case "addEmployee":
        addEmployee();
        break;
      case "updateEmployeeRole":
        updateEmployeeRole();
        break;
    }
  });
}

letsStart();

//Functions for the main menu above.

// View all departments.
function viewAllDepartments() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
  });
  letsStart();
}

// View all roles.
function viewAllRoles() {
  db.query("SELECT * FROM role", (err, res) => {
    console.table(res);
  });
  letsStart();
}

// View all employees.
function viewAllEmployees() {
  db.query("SELECT * FROM employee", (err, res) => {
    console.table(res);
  });
  letsStart();
}

// Add a new department.
function addDepartment() {
  prompt([
    {
      type: "input",
      name: "choice",
      message: "Please add a appropiate name for the new department.",
    },
  ]).then((res) => {
    let answer = res.choice;
    db.query(
      "INSERT INTO department (name) VALUES (?)",
      [answer],
      (err, res) => {
        if (err) throw err;
        console.table(res);
      }
    );
    letsStart();
  });
}

// Add a new role.
function addNewRole() {
  let departmentID = [];
  let departmentName = [];
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;

    res.forEach(({ id }) => {
      departmentID.push(id);
    });

    res.forEach(({ name }) => {
      departmentName.push(name);
    });
    addRole(departmentID, departmentName);
  });
}
