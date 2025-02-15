const pool = require('../database/database');

const getAll = async () => {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM productos');
        return res.rows;
    } finally {
        client.release();
    }
};

module.exports = {
    getAll,
};