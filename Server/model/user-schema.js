import mongoose  from "mongoose";
import autoincrement from 'mongoose-auto-increment'


// here we are validating the data , chacking the data to be string or not 


const userSchema = mongoose.Schema({ // creating the schema 
    name: String,
    username: String,
    email: String,
    phone: String
})

autoincrement.initialize(mongoose.connection)// initialize to mongodb and connect

userSchema.plugin(autoincrement.plugin, 'user') // use as a plugin in collection 

const user = mongoose.model('user', userSchema); // name the collection as 'user'. 

export default user; 