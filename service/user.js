const User = require("../model/user");

const createUser = async (name, email, college, city) => {
  try {
    const isEmailExists = await User.checkEmailExist(email);
    if (isEmailExists) {
      return { message: "Email already registered" };
    }
    const newUser = await User.createUser(name, email, college, city);
    return newUser;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (user,id) =>{
  try{
    console.log(user)
    const isUserIdExist = await User.checkUserIdExist(user.id)
    if(!isUserIdExist){
      return {message:"user id not exist "}
    }
  const existUser = await User.updateUser(user)
  return existUser;
  }catch (err) {
    throw err;
  }
}

module.exports = {
  createUser,updateUser
};
