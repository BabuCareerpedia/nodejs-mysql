const pool = require('../DB/connection');

const createUser = async (name, email) => {
    try {
        const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
        console.log("first")
        const result = await pool.query(query, [name, email]);
        return { id: result.insertId, name, email };
    } catch (err) {
        throw err;
    }
};

// const getUserDetails = async () =>{
//     try{
//         const query = 'SELECT * FROM USERS'
//         const result = await pool.query(query);
//         return result;
//     }catch(err){
//         throw err
//     }
// }

module.exports = {
    createUser
};
