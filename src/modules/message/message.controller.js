import { messageModel } from '../../../database/models/message.model.js'


export const addMsg = async (req, res) => {
  const { message, receivedId } = req.body
  await messageModel.insertMany({ message, receivedId })
  res.json({message: "success"})
}

export const getUserMsg = async (req, res) => {
  const messages = await messageModel.find({ receivedId: req.userId })
  res.json({message: "success", messages})
}