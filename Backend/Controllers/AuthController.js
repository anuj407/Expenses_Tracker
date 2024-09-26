const bcrypt = require('bcrypt')
const users = require("../Models/users");
const jwt= require('jsonwebtoken')
const signup = async (req, res) => {
    try{
        //Input Data
       const {name, email, password}=req.body;
       //find user from database
       const user = await users.findOne({email});
       if(user){
           return res.status(409).json({message: "User already exists",success:false})
       }
       //Create new user object
       const newUser = new users({name, email, password});
       // Encrypt the password
       newUser.password = await bcrypt.hash(password,10);
       await newUser.save();
       res.status(201).json({message: "User registered successfully", success: true})
       
    }
    catch(err){
        res.status(500).json({message: err.message ,success : false})
    }
}
const login = async (req, res) => {
    try{
       const {name, email, password}=req.body;
       const user = await users.findOne({email});
       const errorMsg= "Auth failed Email or password is incorrect";
       if(!user){
           return res.status(403).json({message: errorMsg})
       }
       const isEqual = await bcrypt.compare(password, user.password)
       if(!isEqual){
           return res.status(403).json({message: errorMsg})
       }
       const jwtToken= jwt.sign({
        _id: user._id,
        email: user.email
       },
       process.env.JWT_SECRET,
       {expiresIn: '24h'}
    )
       
       res.status(200).json({message: "Login successfully", success: true , jwtToken , email , name: user.name})
    }
    catch(err){
        res.status(500).json({message: err.message ,success : false})
    }
}

module.exports={
    signup ,
    login
}