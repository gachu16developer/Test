const db = require("./db");

db.query("SHOW TABLES;", (err, results) => {
    if (err) {
        console.error("❌ Query Error:", err);
    } else {
        console.log("📌 Tables in Database:", results);
    }
    db.end();
});
