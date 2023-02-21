import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Authcontext from '../Context/Authcontext'
import "../Styles/Navbar.css"
const usertoken=localStorage.getItem("token")
const Navbar = () => {
  const [token,settoken]=React.useState(usertoken)
  const {loginAuth,setloginAuth}=useContext(Authcontext);
  
console.log(usertoken,"token")
function handleLogOut(){
   console.log(" logout clicked");
   settoken(null);
}
  return (
    <div className='navbar'>
        <div>
           <h3> Bill Tracker</h3>
        </div>
        <div className='icons'>
          <Link to="/"><div>Bills</div></Link>
        <Link to="/create"><div>Create Bill</div></Link>
        {loginAuth? <Link to="/logout"><div onClick={handleLogOut}>Logout</div></Link>:<Link to="/login"><div>Login</div></Link>}
       
        </div>
    </div>
  )
}

export default Navbar