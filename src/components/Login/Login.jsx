import React, { useContext } from 'react'
import axios from "axios";
import { useFormik } from 'formik'; 
import * as Yup from "yup";
import toast from "react-hot-toast";
import { AdminToken } from '../../Context/AdminToken';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  let navigate = useNavigate()
  let{setAdminToken}=useContext(AdminToken)
  let loginSchema = Yup.object({
    email:Yup.string().email("please enter valid email").required("please enter your email"),
    password:Yup.string().matches(/^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z]).{6,}$/,"please enter strong password").required("please enter your password")

  })
  async function loginSubmit(values){
    try{
      const {data}=await axios.post('http://localhost:8000/api/v1/auth/login',values)
      console.log(data);
      if(data.data&&data.data.role==="admin"){
        toast.success("login successfully")
          localStorage.setItem("adminToken",data.token)
          localStorage.setItem("userRole",data.data.role)
          setAdminToken(data.token)
          navigate('/')

      }
      else{
        toast.error("you are not allow to login")
      }
    }
    catch(error){
      console.log(error)
          if(error.response){
        toast.error("something wants wrong ")
      }
    }

  }
 let formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },validationSchema:loginSchema
    ,onSubmit : loginSubmit
  })
  return (
    <div className="full-page">
      <div className='login-wrapper'>
      <form onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <div className='input-field'>
            <input type='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            <label>Email</label>       
        </div>
        {formik.errors.email&&formik.touched.email?<div className='p-2 alert alert-danger w-50' >{formik.errors.email}</div>:""}
        <div className='input-field'>
            <input type='password' name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <label>Password</label>       
        </div>
        {formik.errors.password&&formik.touched.password?<div className='p-2 alert alert-danger w-50' >{formik.errors.password}</div>:null}
        <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  )
}
