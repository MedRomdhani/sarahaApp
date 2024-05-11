import express from "express";
import { getUserMsg, addMsg } from './message.controller.js'

export const messageRouter = express.Router()

messageRouter.post('/', addMsg)
messageRouter.get('/', getUserMsg)