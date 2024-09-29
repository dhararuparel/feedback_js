const { Pool } = require("pg");

const pool =new Pool({
    user:"postgres",
    password:"dhara16",
    host: "localhost",
    port: 5433,
    
});

pool.query("CREATE DATABASE FEEDBACK;").then(response => {
    console.log("Database created");
    console.log(response);
}).catch (err => {
    console.log("Error:",err);
});

module.exports = pool;