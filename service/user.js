const User = require("../model/user");

const createUser = async (name, email, college, city) => {
  try {
    const isEmailExists = await User.checkEmailExist(email);
    console.log("v", email);
    
    if (isEmailExists) {
      console.log("Email already registered");
      return { message: "Email already registered" }; // Return here if the email is already registered
    }

    const newUser = await User.createUser(name, email, college, city); // This will run only if email is not registered
    return newUser;
  } catch (err) {
    throw err;
  }
}

const updateUser = async (id,name, email, college, city) =>{
  try{
    console.log(id)
    // const isEmailExists = await User.checkEmailExist(email)
    // const isUserIdExist = await User.checkUserIdExist(id)
    // if(!isUserIdExist && !isEmailExists){
    //   return {message:"user id or mail not exist "}
    // }
  const existUser = await User.updateUser(id,name, email, college, city)
  return existUser;
  }catch (err) {
    throw err;
  }
}

module.exports = {
  createUser,updateUser
};
