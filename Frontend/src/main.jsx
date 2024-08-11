import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Create,Read,Update,Home} from './Pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children : [
      {
        path: "",
        element:<Home/> 
      }, 
      {
        path: "create",
        element:<Create/>
      },
      {
        path : "update/:id",
        element:<Update/>
      },
      {
        path: "read",
        element: <Read/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
