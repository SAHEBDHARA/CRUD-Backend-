import express from "express"
import {resisterUser, loginUser } from "../controler/auth-controler.js"


const router = express.Router()

//login route 
router.post('/login',loginUser)

// signup route 
router.post('/resister',resisterUser)

export default router; 

