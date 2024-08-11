import dotenv from 'dotenv'
dotenv.config({path:"./.env"})

import {app} from './app.js'
import {connectDB} from './db/index.js'
const port = process.env.PORT || 7001

connectDB().then(() => {
       app.listen(port,() => {
              console.log("Server is running on PORT ",port)
       })
})
.catch((error) => {
       console.log("Error in MONGODB Connection")
})