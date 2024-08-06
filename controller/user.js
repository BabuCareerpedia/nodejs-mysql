const User = require('../model/user');
const createToken  = require('../utilies/token'); 

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.createUser(name, email);
        const token =  await createToken(user.id);
        res.status(200).json({message :"user added successfully",token});
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createUser
};
