const mysql = require('mysql2');

module.exports = mysql.createConnection({
    host: "mysql",
    user: "datawatcher",
    password: "superPassword",
    database: "dashboard", 
});