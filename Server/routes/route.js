
import express from "express";
import {addUser, allUser, getUser, editUser, deleteUser, addText } from "../controler/user-controler.js"

const router = express.Router();

router.post('/add', addUser);
router.get('/all', allUser);
router.get('/:id',getUser);
router.post('/:id',editUser);
router.delete('/:id',deleteUser);
router.put('/text', addText);






export default router; 
