import React,{useEffect,useState} from 'react'
import {read,deleteText,update} from '../backendConnection/operation.js'
import {Button} from '../components/index.js'
import { useNavigate } from 'react-router-dom'
function Read() {
  const navigate = useNavigate()
  const [data,setData] = useState([])
  useEffect(() => {
    async function hello(){
      try {
        const response = await read()
        setData(response)
      } catch (error) {
        console.log(error)
      }
    }
    hello()

  },[])

  async function deleteTextComponent(id){
    try {
      const response = await deleteText(id)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div className='text-3xl text-white bg-green-600'>Read</div>
    <div>
      {
        data?.map((item) => (
          <div key={item._id} className='text-black bg-white m-4 p-4 rounded-lg ' style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
            <div className='text-2xl'>
            {item.value}
            </div>
            <Button bgColor="red" onClick={() => {
              deleteTextComponent(item._id)
            }}>Delete</Button>
            <Button bgColor="green" onClick={() => {navigate(`/update/${item._id}`)}}>Update</Button>
          </div>
        ))
      }
    </div>
    </>
    
  )
}

export default Read