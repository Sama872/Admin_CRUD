import { createBrowserRouter } from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import { Toaster } from 'react-hot-toast';
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { useContext, useEffect } from "react";
import { AdminToken } from "./Context/AdminToken";

function App() {
  let router=createBrowserRouter([{
    path:'/',element:<Layout/>,children:[
      {path:'',element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:"login",element:<Login/>}
    ]
  }])
  let {setAdminToken}=useContext(AdminToken)
   useEffect(()=>{
  if(localStorage.getItem('adminToken')){
    setAdminToken(localStorage.getItem('adminToken'))
  }
},[])
 
  return (
    <div>
      <RouterProvider router={router}/>
     
     <Toaster/>
    </div>
  );
}

export default App;
