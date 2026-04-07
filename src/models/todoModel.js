const { sql, poolPromise } = require('../config/database');

const getAll = async () => {
    const pool = await poolPromise;
    const result = await pool.request()
        .query('SELECT * FROM todos ORDER BY created_at DESC');
    return result.recordset;
};

const create = async (titulo) => {
    const pool = await poolPromise;
    await pool.request()
        .input('titulo', sql.VarChar, titulo)
        .query('INSERT INTO todos (titulo, completado) VALUES (@titulo, 0)');
};

const update = async (id, completado) => {
    const pool = await poolPromise;
    await pool.request()
        .input('id', sql.Int, id)
        .input('completado', sql.Bit, completado)
        .query('UPDATE todos SET completado = @completado WHERE id = @id');
};

const remove = async (id) => {
    const pool = await poolPromise;
    await pool.request()
        .input('id', sql.Int, id)
        .query('DELETE FROM todos WHERE id = @id');
};

module.exports = { getAll, create, update, remove };