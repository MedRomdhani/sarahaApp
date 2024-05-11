import express from "express";
import { getUserMsg, addMsg } from './message.controller.js'
import { auth } from '../../midellware/auth.js';

export const messageRouter = express.Router()

messageRouter.post('/', auth, addMsg)
messageRouter.get('/', auth, getUserMsg)