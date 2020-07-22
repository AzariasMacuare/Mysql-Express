const mysql = require('mysql');
const key = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'famous'
}

const pool = mysql.createPool(key);

pool.getConnection((err, connection) => {
    if (err) {
        console.error(err);
    }
    connection.release();
    console.log('DB is Connected')
});

module.exports = pool;