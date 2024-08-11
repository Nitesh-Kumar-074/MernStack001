import React from 'react'
import {useForm} from 'react-hook-form'
import {Input,Button} from '../components'
import {create} from '../backendConnection/operation.js'
import {useNavigate} from 'react-router-dom'
function Create() {

  const navigate = useNavigate()
  const {register,handleSubmit} = useForm()

  const submit = async(data) => {
    try {
      let response = await create(data)
      console.log(response)
      if(response){
        navigate("/")
      }
    } catch (error) {
      console.log("Nahi chala tera Create.jsx")
    }
  }

  return (
    <>
    <div className='text-3xl text-white bg-green-600'>
       CREATE
    </div>
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Input label="Enter text " {...register("value",{required:true})} />
        <Button type='submit'>Post </Button>
      </form>
    </div>
    </>
  )
}

export default Create