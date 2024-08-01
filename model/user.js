const db = require('../DB/connection');

const createUser = async (name, email) => {
    try {
        const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
        console.log("first")
        const result = await db.query(query, [name, email]);
        return { id: result.insertId, name, email };
    } catch (err) {
        throw err;
    }
};

module.exports = {
    createUser
};
