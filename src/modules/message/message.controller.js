import { messageModel } from '../../../database/models/message.model.js'
import { emailSender } from '../../emails/nodemailer.js'

export const addMsg = async (req, res) => {
  const { message, receivedId } = req.body
  await messageModel.insertMany({ message, receivedId })
  res.json({message: "success"})
}

export const getUserMsg = async (req, res) => {
  emailSender()
  const messages = await messageModel.find({ receivedId: req.userId })
  res.json({message: "success", messages})
}