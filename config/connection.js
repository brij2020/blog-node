const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password :"root@123",
    database:"node"
})

module.exports = connection

