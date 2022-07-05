const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username
    user: "root",
    // MySQL password
    password: "",
    database: "employees_db",
  },
  console.log(`Database linked.`)
);

module.exports = db;
