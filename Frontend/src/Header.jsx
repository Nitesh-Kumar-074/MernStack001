import { Button } from "./components";
import { useNavigate } from "react-router-dom";
import React from 'react'

function Header() {
       const navigate = useNavigate()
       const navItems = [
              {
                     slug:"/create",
                     name : "Create"
              },
              {
                     slug: "/read",
                     name : "Read"
              }
       ]
  return (
    <div style={{border:"5px solid black",borderRadius:"20px",backgroundColor:"blanchedalmond"}} className="flex">
       {
              navItems.map((item) => (
                     <div className="m-4" key={item.name}>
                            <Button className='rounded-lg' onClick={() => {navigate(item.slug)}}>
                                   {item.name}
                            </Button>
                     </div>
              ))
       }
    </div>
  )
}

export default Header