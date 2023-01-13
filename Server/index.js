import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';

import Connection from './DB/db.js';
import Route from './routes/route.js'

const app = express();
dotenv.config();
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());// cors does allow to request data from different server in different url.

const PORT = process.env.PORT || 3000; 

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 

Connection(username, password);


app.use('/', Route )

//route 
app.get('/',(req,res)=>{
    res.send("This is the server")
})


app.listen(PORT, ()=>console.log(`The server is running on port ${PORT}` ))

// pass - crudapp123
// uname - crudapp
//mongodb+srv://crudapp:<password>@cluster0.zpcyskd.mongodb.net/?retryWrites=true&w=majority