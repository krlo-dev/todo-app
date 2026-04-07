const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');

router.get('/', async (req, res) => {
    const todos = await Todo.getAll();
    res.json(todos);
});

router.post('/', async (req, res) => {
    await Todo.create(req.body.titulo);
    res.json({ success: true });
});

router.put('/:id', async (req, res) => {
    await Todo.update(req.params.id, req.body.completado);
    res.json({ success: true });
});

router.delete('/:id', async (req, res) => {
    await Todo.remove(req.params.id);
    res.json({ success: true });
});

module.exports = router;