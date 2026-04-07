const express = require('express');
const path = require('path');
require('dotenv').config();

const todoRoutes = require('./src/routes/todoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/views')));

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});