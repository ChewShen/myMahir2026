const mysql = require('mysql2/promise');

const database = mysql.createPool({
    host : 'localhost',
    user: 'root',
    password: '12345678',
    database: 'mymahir'
});

(async () => {
    try{
        const connection = await database.getConnection();
        connection.release();
    } catch (err){
        console.error('Database connection failed');
    }
    
});

module.exports = database;