const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


//API for SignUP
module.exports.SignUp = async function (req, res) {
    try {
        const { username, email, password, phoneNumber } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password, salt);
        const user = new User({
            username: username,
            email: email,
            password: hashpass,
            phoneNumber: phoneNumber
        });
        const new_user = await user.save();
        console.log(new_user);
        return res.status(200).json({
            status: 200,
            success: true,
            userData: new_user,
            message: "User Details Saved Successfully"
        })
    } catch (error) {
        console.log("Error in the SignUP", error);
        return res.status(500).json({
            status: 500,
            error: error.message,
            messsage: "Get Server Error"
        })
    }
}


//API for Login
module.exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: "EmailId is not found" })
        }
        const validated = await bcrypt.compare(password, user.password);
        if (!validated) {
            return res.status(403).json('Wrong Password');
        }
        return res.status(200).json({
            user,
            data: {
                token: jwt.sign(user.toJSON(), 'Guruji_Astro', { expiresIn: 10000 })
            }
        })
    } catch (error) {
        console.log("Error in the login API ", error);
        return res.status(200).json(error)
    }
}

//API for UpdatePassword
module.exports.updatepassword = async function (req, res) {
    try {
        const { email, password, new_password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: "EmailId is not found" })
        }
        const validated = await bcrypt.compare(password, user.password);
        if (!validated) {
            return res.status(403).json('Wrong Password');
        }
        const salt = await bcrypt.genSalt(10)
        const hashpass = await bcrypt.hash(new_password, salt);
        const updateduser = await User.findOneAndUpdate({ email: email }, { password: hashpass }, { returnOriginal: false })
        return res.status(200).json({
            message: "Updated Successfully",
            updateduser
        })

    } catch (error) {
        console.log("Error in Updated Password ", error);
        return res.status(500).json({ error: error.message })
    }
}


//API for DeletAccount
module.exports.delete = async function (req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({ message: "EmailId is not found" })
        }
        const validated = await bcrypt.compare(password, user.password);
        if (!validated) {
            return res.status(403).json('Wrong Password');
        }
        const del = await User.findByIdAndDelete(user._id, {
            id: user._id
        })
        return res.status(200).json({
            message: "Deleted Successfully",
            del
        })
    } catch (error) {
        console.log("Error in Deleting User ", error);
        return res.status(200).json({ error: error.message });
    }
}