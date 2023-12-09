const User = require('../model/user.model.js')

exports.home = (req,res)=>{
    res.send("<h1>Home Page</h1>")
  }

/** 
 *  async await we definitly need because database
 * in other continentals
 */

// create user 

exports.createUser = async(req, res)=>{
    try {
        const {name, email} = req.body;
        if(!name || !email){
            throw new Error("Name and Email are required!");
        }
        /**
         * if the user already exit then check to karna padega na so 
         * the user const we require and we get model folder their we create schema of over data base
         */
        const userExists = await User.findOne({email});

        if(userExists){
            throw new Error('user already Exists');
        }

        const user = await User.create({
            name, 
            email
        });
        console.log(user);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// get users 

exports.getUsers = async(req, res)=>{
    try {
        const users = await User.find({});
        res.status(201).json({
            success: true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// update user 
exports.editUser = async (req, res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({
            success: true,
            message: "User updated successfully."
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

// delete user
exports.deleteUser = async(req, res)=>{
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        res.status(201).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}