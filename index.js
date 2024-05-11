import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import { userRouter } from './src/modules/user/user.routes.js' 
import { messageRouter } from './src/modules/message/message.routes.js' 
import { auth } from './src/midellware/auth.js';
import detenv from 'dotenv'

const app = express()
const port = 3000

dotenv.config()
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.use(userRouter)
app.use('/messages', auth, messageRouter)
dbConnection()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))