const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel');

module.exports = {
    async store(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(200).json({ message: "Required field missing!" })
            }

            const user = await UserModel.findOne({ email });
            if (!user) {
                return res.status(200).json({ message: "User not found! Do you want to register instead?" })
            }

            if (user && await bcrypt.compare(password, user.password)) {
                const userResponse = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    isValidate: user.isValidate
                }
                return res.json(userResponse) 
            } else {
                return res.status(200).json({ message: "Email or Password does not match!" })
            }


        } catch (error) {
            throw Error(`Error while Authenticating a User ${error}`)
        }
    }
}