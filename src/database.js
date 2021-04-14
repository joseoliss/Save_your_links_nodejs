const mysql = require('mysql');
const { database } = require('./keys');
const { promisify } = require('util');//permite async await

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Database connection was closed');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.log('Database has to many connections');
        }
        if (err.code === 'ENCONNREFUSED') {
            console.log('Database connection was refused');
        }
    }

    if (connection) connection.release();
    console.log('DB is connected');
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;
