const express = require('express');
const path = require('path');
const pool = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Datos de administrador temporal
const tempAdmin = {
    username: 'admin',
    password: 'temp1234'
};

// Ruta para autenticación
app.post('/api/login', async (req, res) => {
    const { username, password, role } = req.body;

    if (role === 'admin') {
        if (username === tempAdmin.username && password === tempAdmin.password) {
            return res.json({ success: true, role: 'admin' });
        } else {
            return res.status(401).json({ success: false, message: 'Credenciales incorrectas para administrador' });
        }
    } else {
        // Aquí puedes agregar la lógica para autenticar usuarios comunes si es necesario
        return res.status(401).json({ success: false, message: 'Rol no soportado' });
    }
});

app.get('/api/data', async (req, res) => {
    const ident = req.query.ident;
    if (!ident) {
        return res.status(400).send('Identificación es requerida');
    }

    try {
        const result = await pool.query('SELECT * FROM users WHERE ident = $1', [ident]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).send('Usuario no encontrado');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error ejecutando la consulta');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});