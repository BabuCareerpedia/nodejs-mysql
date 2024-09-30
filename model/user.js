const pool = require("../DB/connection");

const createUser = async (name,email,college,city) => {
  try {
    console.log("bhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    const query = "INSERT INTO users (name, email, college, city) VALUES (?, ?,?,?)";
    const result = await pool.query(query, [name, email,college,city]);
    console.log(result)
    return { id: result.insertId, name, email,college,city };
  } catch (err) {
    throw err;
  }
};




const checkEmailExist = async (email) => {
  try {
    const query = "SELECT * FROM users where email = email";
    console.log(query)
    const result = await pool.query(query, [email]);
    console.log(result)
    return result;
  } catch (err) {
    throw err;
  }
};

const checkUserIdExist = async (id) => {
  try {
    console.log(id)
    const query = "SELECT * FROM users where id = ?";
    const result = await pool.query(query, [id]);
    return result;
  } catch (err) {
    throw err;
  }
};

const getUserDetails = async () => {
  try {
    const query = "SELECT * FROM USERS";
    const result = await pool.query(query);
    return result;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (id, name, email, college, city) => {
  try {
    const query = "UPDATE users SET name = ?, email = ?, college = ?, city = ? WHERE id = ?";
    const result = await pool.query(query, [name, email, college, city, id]);
    return { affectedRows: result.affectedRows, id, name, email, college, city };
  } catch (err) {
    console.log(err);
    throw err;
  }
};



module.exports = {
  createUser,
  getUserDetails,
  checkEmailExist,
  updateUser,
  checkUserIdExist
  
};
