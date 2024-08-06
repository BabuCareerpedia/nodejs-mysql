const User = require("../model/user");

const createUser = async (name, email) => {
  try {
    const isMatch = await User.checkEmail({ email });
    if (isMatch) {
      return { message: "Email already registered" };
    }
    const newUser = new User.createUser({ name, email });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createUser,
};
