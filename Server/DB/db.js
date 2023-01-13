import mongoose from "mongoose"

mongoose.set("strictQuery", false);// because not to show so many text in the console 



const Connection = async (username, password)=>{
const URL = `mongodb+srv://${username}:${password}@cluster0.zpcyskd.mongodb.net/?retryWrites=true&w=majority`;



    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database is connected successfully")
        
    } catch (error) {
        console.log("error while connecting ", error);
        
    }

}

export default Connection;