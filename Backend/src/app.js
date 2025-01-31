import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
       origin : process.env.CORS_ORIGIN,
       credentials : true
}))
// app.use(express.static("public"))


import textRouter from './routes/text.routes.js'
app.use("/text",textRouter)

export {app}