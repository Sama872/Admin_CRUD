import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AdminToken } from './../../Context/AdminToken';



export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
 let {adminToken,setAdminToken}= useContext(AdminToken)
  let navigate=useNavigate()
  function LogOut(){
    localStorage.removeItem('userToken')
    setAdminToken(null)
    navigate('/login')

  }
  return (

     <nav className="navbar navbar-expand-lg fixed-top">
        <div className='container-fluid'>
        <div className="navbar-brand d-flex align-items-center">
        
        
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {adminToken&&localStorage.getItem('userRole')==='admin'?<><ul className='navbar-nav me-auto'>
            <li className="nav-item">
                <span onClick={LogOut} className='text-pointer'>LogOut</span>
            </li>
            </ul></>:<>
            <ul className='navbar-nav me-auto'>
            <li className="nav-item">
                <Link className={pathname==='/login'?"nav-link botton rounded":"nav-link"} to="login">LogIn</Link>
            </li>
            </ul></>}
          {adminToken&&localStorage.getItem('userRole')==='admin'? <ul className="navbar-nav mr-auto">
            <li className="nav-item m-auto">
                <Link to="/">Home</Link>
            </li>
            </ul>:""}
        </div>
        </div>
</nav>
    
  )
}
