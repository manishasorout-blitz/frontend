import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Authcontext from '../Context/Authcontext'
const usertoken=localStorage.getItem("token");
const Logout = () => {
    const [token,settoken]=React.useState(usertoken)
  

  return (
 <>
 <div><h1>User loggedOut </h1>
         <h3>login first to continue</h3>
         <button><Link to="/login">Login</Link></button>
 </div>
 </>
  )
}

export default Logout