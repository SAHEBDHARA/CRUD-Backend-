import User from "../model/authSchema.js" 
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken"

const createToken = (_id)=>{
   return jwt.sign({_id},process.env.SECRET, {expiresIn: '1h'})
}

                                                                //login function 
export const loginUser = async (req,res)=>{

    const { email, password } = req.body;

    try {
        if(!email || !password){
      return res.status(401).json({ message: 'pura fill kar na lawde' });

        }

        //mathcing the email 
        const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'incorrect email' });
    }


    //matching the passowrd
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'incorrect password' });
    }


    const payload = { id: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });


} 
    
    
    catch (error) {
        console.log(error)
        res.send(400).json({error: error.message})
        
    }

}










                                                            // resister function 

export const resisterUser = async (req,res)=>{
    const {name, email, password } = req.body 
    try {




    if(!email || !password || !name ){
      
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


    //hashing password 
    const hashedPassword = await bcrypt.hash(password, 10);


    // Create new user

    const newUser = new User({ name, email, password: hashedPassword });


// saving to database 
    await newUser.save();



    //creating token 
    const token = createToken(newUser._id) 

    res.status(201).json({ message: 'User created' });

    console.log(token);





    } catch (error) {
        res.send(400).json({error: error.message})
    }
  
}
