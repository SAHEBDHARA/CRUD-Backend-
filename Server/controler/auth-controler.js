import User from "../model/authSchema.js" 
import bcrypt from "bcrypt";
import validator from "validator"



//login function 
export const loginUser = async (req,res)=>{
    
    res.send("hello");
    res.json({message:"resister form"})

}

// resister function 

export const resisterUser = async (req,res)=>{
    const {name, email, password } = req.body 
    try {

    if(!email || !password || !name){
      
      return res.status(409).json({ message: 'all must be filed' });

    }
    //valid email 
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'Invalid email' });
      }
      if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ message: 'give a strong password' });
      }


     // Check if user already exists

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);


    // Create new user

    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: 'User created' });



    } catch (error) {
        res.send(400).json({error: error.message})
    }
  
}
