const UserService = require('../service/userService');
const userService = new UserService();
const registerUser = async (req,res) => {
    try{
        const data = {
            email: req.body.email,
            password: req.body.password
        };
        const user = await userService.createUser(req.body);
        return res.status(200).json({
            message: 'User created successfully',
            data: user,
            success: true,
            error: {}
        });
    }
    catch(err){
        if(err=="Mail already Registered!"){
            return res.status(400).json({
                data: {},
                success: false,
                error: err
            });
        }
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            error: err
        });
    }    
}

const loginUser = async (req,res) => {
    try{
        const user = await userService.findUser(req.body);
        return res.status(200).json({
            message: 'User logged in successfully',
            data: user,
            success: true,
            error: {}
        });
    }
    catch(err){
        if(err=="Incorrect Password"){
            return res.status(400).json({
                message: "Incorrect Password",
                data: {},
                success: false,
                error: err
            });
        }
        if(err=="User Not Found"){
            return res.status(404).json({
                message: "User Not Found",
                data: {},
                success: false,
                error: err
            });
        }
        return res.status(500).json({
            message: "Something went wrong",
            data: {},
            success: false,
            error: err.message || "Something went wrong"
        });
    }
}

module.exports = {
    registerUser,
    loginUser
}