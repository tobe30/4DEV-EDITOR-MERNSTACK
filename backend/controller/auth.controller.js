import  bcrypt from 'bcryptjs';
import User from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";



export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body 

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)){
                return res.status(400).json({ error: "Invalid email format"});
            }

            const existingEmail = await User.findOne({ email });
            if(existingEmail){
                return res.status(400).json({ error: " Email is already taken" })
            }

            if(password.length < 6){
                return res.status(400).json({ error: "Password must be at least 6 characters long" })
            }
            // hash password

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                email,
                username,
                password:hashedPassword
            })

            if(newUser){
                generateTokenAndSetCookie(newUser._id,res)
                await newUser.save()

                res.status(201).json({
                    _id: newUser._id,
                    email:newUser.email,
                    username: newUser.username,

                })
            }else{
                res.status(400).json({ error: "Invalid user data" });
            }
            
    } catch (error) {
        console.log("Error in register controller", error.message)
        res.status(500).json({ error: "Invalid user error"})
    }
}

export const login = async (req, res) => {
    try {
      
            const { email, password } = req.body;
            const user = await User.findOne({ email });
        
            // Check if user exists and the password is correct
            const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
            if (!user || !isPasswordCorrect) {
              return res.status(400).json({ error: "Invalid username or password" }); // Add return to prevent further execution
            }      
        
            // Send success response
            generateTokenAndSetCookie(user._id, res);
            return res.status(200).json({
              _id: user._id,
              email: user.email,
            });     
          
    } catch (error) {
            console.error("Error in login controller", error.message);
            return res.status(500).json({ error: "An error occurred during login" }); // Add return here as well
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
      console.error("Error in login controller", error.message);
      res.status(500).json({message:"Internal server error"})
    }
}

export const getMe = async (req, res) =>{
    try {
        const user = await User.findById(req.user._id).select("-password")
        res.status(200).json(user);
    } catch (error) {
      console.error("Error in getme controller", error.message);
      res.status(500).json({message:"Internal server error"})
    }
}