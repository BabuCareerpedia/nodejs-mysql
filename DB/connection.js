
const mysql = require('mysql2');

// MySQL connection
 const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // use your MySQL username
    password: 'Babu@201', // use your MySQL password
    database: 'myproject_db'
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

module.exports = db;
