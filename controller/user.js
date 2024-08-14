const createToken = require("../utilies/token");
const userService = require("../service/user");

const createUser = async (req, res) => {
  try {
    const { name, email, college, city } = req.body;
    const user = await userService.createUser(name, email, college, city);  
    if (user.message) {
      return res.status(400).json({ message: user.message });
    }
    const token = await createToken(user.id);
    res.status(200).json({ message: "User added successfully", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = req.body;
    const id = req.param
    const result = await userService.updateUser(user,id);
    const token = await createToken(user.id);
    res.status(200).json({ message: "user updated successfully",token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createUser,updateUser
};
