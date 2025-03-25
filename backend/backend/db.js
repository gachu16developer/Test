const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Tarun1806***",
    database: process.env.DB_NAME || "appproject"
});

db.connect((err) => {
    if (err) {
        console.error("❌ MySQL Connection Failed:", err);
        process.exit(1);
    }
    console.log("✅ MySQL Connected Successfully!");
});

module.exports = db;
