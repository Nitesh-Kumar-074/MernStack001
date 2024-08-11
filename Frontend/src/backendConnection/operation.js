import axios from 'axios'

const create = async(data) => {
       try {
              const response = await axios.post(`/text/create`,data,
                     {
                            headers : {
                                    'Content-Type': 'application/json'
                            }
                     }
              )
              return response
       } catch (error) {
              console.log("Error in create in backendConnection")
       }
}

const update = async(data,id) => {
       try {
              const response = await axios.patch(`/text/update/${id}`,data,
                     {
                            headers : {
                                   'Content-Type': 'application/json'
                           }
                     }
              )
       } catch (error) {
              console.log("Error in update in backendConnection")
       }
}

const read = async() => {
       try {
              const response = await axios.get(`/text/read-all`)
              return response?.data?.data
       } catch (error) {
              console.log("Error in read in backendConnection")
       }
}

const deleteText = async(id) => {
       try {
              const response = await axios.delete(`/text/delete/${id}`)
              return response
       } catch (error) {
              console.log("Error in deleteText in backendConnection")
       }
}

export {
       update,
       create,
       read,
       deleteText
}