const { Pool } = require('pg');

const pool = new Pool({
    user: 'Elier29s',
    host: 'localhost',
    database: 'InvFundaproal',
    password: 'Admin123',
    port: 5432,
});

module.exports = pool;