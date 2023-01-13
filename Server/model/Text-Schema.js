import mongoose  from "mongoose";
import autoincrement from 'mongoose-auto-increment'


// here we are validating the data , chacking the data to be string or not 


const textSchema = mongoose.Schema({ // creating the schema 
    heading: String,
    text: String,
    // date: String
    
})

autoincrement.initialize(mongoose.connection)// initialize to mongodb and connect

textSchema.plugin(autoincrement.plugin, 'text') // use as a plugin in collection 

const text = mongoose.model('text', textSchema); // name the collection as 'user'. 

export default text; 