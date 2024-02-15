import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import Cover from "./Components/Cover/Cover"
import Login from "./Components/Login/Login"
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute"
import UserContextProvider from "./Context/UserContext"
import Control from "./Components/Control/Control"


export default function App(){
let router = createBrowserRouter([{path : '', element: <Layout/>, children:[
  {
    path: "home",
     element: 
         <ProtectedRoute><Home/></ProtectedRoute>
     
  },
  {
    path: "control",
     element: 
         <ProtectedRoute><Control/></ProtectedRoute>
     
  },{
    index: true,
     element: 
         <Cover/>
   },{
  },{
    path: "cover",
     element: 
         <Cover/>
   },{
    path: 'login', 
    element: <Login/>
   }
]}])
  return <>
  <UserContextProvider>
      <RouterProvider router={router} >
      </RouterProvider>
  </UserContextProvider>
  </>
}