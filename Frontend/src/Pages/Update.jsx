import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {update} from '../backendConnection/operation.js'
import {Button,Input} from '../components/index.js'

function Update() {
  const {register,handleSubmit} = useForm()
  const {id} = useParams()
  const navigate = useNavigate()
  const submit = async(data) => {
    try {
      await update(data,id);
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='text-3xl text-white bg-green-600'>Update</div>
      <div style={{border:"3px solid blue",borderRadius:"20px",margin:"100px",padding:"100px"}}>
      <form onSubmit={handleSubmit(submit)}>
        <Input label="Enter your new text here :- " {...register("value",{required:true})}/>
        <Button type='submit' bgColor='green'>Update text</Button>
      </form>
      </div>
    </div>
  )
}

export default Update