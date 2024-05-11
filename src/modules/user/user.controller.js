import { userModel } from '../../../database/models/user.model.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
  const { name, email, password, age } = req.body;
  const user = await userModel.findOne({email})
  if(user) return res.json({message: "email already exist!"})
  let hash = bcrypt.hashSync(password, 8)
  userModel.insertMany({ name, email, password: hash, age })
  res.json({massage: "success"})
}

export const signIn = async (req, res) => {
  const { email, password} = req.body;
  const user = await userModel.findOne({email})
  if(user && bcrypt.compareSync(password, user.password)) {
    let token = jwt.sign({name: user.name, userId: user._id}, process.env.JWT_SECRET)
    return res.json({message: "success", token})
  } else {
      res.json({message: "verify your name & password!"})
  }
}