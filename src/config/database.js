const sql = require('mssql');
require('dotenv').config();

const config = {
    server: process.env.DB_SERVER || 'localhost',
    database: process.env.DB_NAME || 'todo_db',
    user: process.env.DB_USER || 'sa',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT) || 1433,
    options: {
        encrypt: true,
        trustServerCertificate: !process.env.DB_SERVER || process.env.DB_SERVER === 'localhost'
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => { console.log('BD conectada'); return pool; })
    .catch(err => console.error('Error BD:', err.message));

module.exports = { sql, poolPromise };