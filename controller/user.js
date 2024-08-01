const User = require('../model/user');
const { createToken } = require('../routes/token'); // Make sure you have a utility to create tokens

const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.createUser(name, email);
        const token = createToken(user.id);
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createUser
};
