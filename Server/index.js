import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser';

import Connection from './DB/db.js';
import Route from './routes/route.js'
import Useroute from './routes/auth.js'

const app = express();
dotenv.config();
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors());// cors does allow to request data from different server in different url.

const PORT = process.env.PORT || 8000; 

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 

Connection(username, password);


app.use('/api', Route )
app.use('/api/user',Useroute)

//route 
app.get('/',(req,res)=>{
    res.send("This is the server")
})


app.listen(PORT, ()=>console.log(`The server is running on port ${PORT}` ))


