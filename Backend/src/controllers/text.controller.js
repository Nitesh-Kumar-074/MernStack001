import mongoose from "mongoose";
import {Text} from '../models/text.model.js'
import {ApiResponse} from '../utils/ApiResponse.js'

const createData = async(req,res) => {
       try {
              const {value} = req.body
              const createdInstance = await Text.create({
                     value,
              })
              return res.status(200).json(new ApiResponse(300,createdInstance,"Create operation successful"))
       } catch (error) {
              return res.status(500).json("Error in creating entry", error.response ? error.response.data : error.message)
       }
}

const deleteData = async(req,res) => {
       try {
              const {id} = req.params
              const deletedInstance = await Text.findByIdAndDelete(id)
              res.status(200).json(new ApiResponse(300,deletedInstance,"Delete option success"))
       } catch (error) {
              res.status(500).json("Error in deleting an entry") 
       }
}

const readData = async(req,res) => {
       try {
              const allEntries = await Text.find()
              res.status(200).json(new ApiResponse(303,allEntries,"Reading operation successful"))
       } catch (error) {
              res.status(500).json("Error in raeding entries") 
       }
}

const updateData = async(req,res) => {
       try {
              const {id} = req.params
              const {value} = req.body
              const newEntry = await Text.findByIdAndUpdate(
                     id,{
                            $set:{
                                   value,
                            }
                     }
              )
              res.status(200).json(new ApiResponse(300,newEntry,"Update operation successful"))
       } catch (error) {
              res.status(500).json("Error in updating an entry") 
       }
}

export {createData,deleteData,updateData,readData}