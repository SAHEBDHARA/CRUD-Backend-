import mongoose  from "mongoose";
// import bcrypt from "bcrypt"
// import autoincrement from 'mongoose-auto-increment'


// here we are validating the data , chacking the data to be string or not 


const authSchema = mongoose.Schema({ // creating the schema 
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})






const auth = mongoose.model('auth', authSchema); // name the collection as 'user'. 

export default auth; 