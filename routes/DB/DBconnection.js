require('dotenv').config();
const mysql = require('mysql');
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports.query = async (query) => {

    const result = new Promise((resolve, reject) => {
        connection.getConnection((err, conn) => {
            if (err) throw err;
            conn.query(query, function (error, results, fields) {
                if (error) throw error;
                return resolve(results);
            });
        })
    });
    return result;
}

