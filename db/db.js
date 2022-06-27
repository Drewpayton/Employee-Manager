const mysql = require('mysql2');
require('dotenv').config();
require('console.table');

var db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employeetracker_db"
})

db.connect(err => {
    if(err) throw err;
    console.log('has connected')
})





module.exports = db