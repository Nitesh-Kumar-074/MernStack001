import mongoose from 'mongoose'
import {DB_NAME} from '../constants.js'
export const connectDB  = async() => {
       try {
              await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
              console.log("Mongo DB Connected")
       } catch (error) {
              console.log("Error in conncting database")
       }
}
