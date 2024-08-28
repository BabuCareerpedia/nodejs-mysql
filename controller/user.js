const createToken = require("../utilies/token");
const userService = require("../service/user");

const createUser = async (req, res) => {
  try {
    const { name, email, college, city } = req.body;
    const user = await userService.createUser(name, email, college, city);  
    const token = await createToken(user.id);
    res.status(200).json({ message: "User added successfully", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, college, city} = req.body;
    const id = req.params
    console.log(id)
    const result = await userService.updateUser(id,name, email, college, city);
    const token = await createToken(user.id);
    res.status(200).json({ message: "user updated successfully",token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



module.exports = {
  createUser,updateUser
};
