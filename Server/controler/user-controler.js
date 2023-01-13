import User from "../model/user-schema.js"
import Text from "../model/Text-Schema.js"


// first post request 
export const addUser = async (req,res)=>{
    const user = req.body;

    const newUser = new User(user) // chacking validation 

    try {
       await newUser.save();
       res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message})
        console.log("error while saveing the data to mongodb is ", error);
    }

}


export const allUser = async(req,res)=>{
    try {

         const users = await User.find();
        res.status(200).json(users)
        
    } catch (error) {

        res.status(409).json({message: error.message})
        
    }
}

export const getUser = async (req,res)=>{

    try {
        //const users = await User.find({_id: req.params.id});
        const users = await User.findById(req.params.id)
       res.status(200).json(users)
       
   } catch (error) {

       res.status(409).json({message: error.message})
       
   }
} 

export const editUser = async (req,res)=>{

    let user = req.body;
    const editUser = new User(user);
    try {
       await User.updateOne({_id: req.params.id}, editUser);
       res.status(200).json(editUser)

       
    } catch (error) {
       res.status(409).json({message: error.message})
        
    }
}

export const deleteUser =async (req,res)=>{
    try {
       await User.deleteOne({_id: req.params.id});
       res.status(200).json("massage is deleted")
        
    } catch (error) {
       res.status(409).json({message: error.message})
        
    }
}


// Text post request 

export const addText = async (req,res)=>{
    const word = req.body;

    const newText = new Text(word) // chacking validation 

    // console.log(newText)

    try {
    await newText.save(); 
    res.status(201).json(newText)
    } catch (error) {
        res.status(400).json({ message: error.message})
        console.log("error while saveing the data to mongodb is ", error);
    }


  

}








