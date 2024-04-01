// importing model

const User = require('../models/User');

exports.registerUser = async(req, res) =>{
    try {
        const {fullName, email, password} = req.body;
        const result = await User.create({
            fullName, email, password
        });
        res.status(200).json({
            success:true,
            data:result,
            message:'user registered successful!'
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            data:error,
            message:error.message,
        })
    }
}