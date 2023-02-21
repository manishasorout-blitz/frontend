import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom";
import Authcontext from '../Context/Authcontext';
const PrivateRoutes = ({children}) => {
  const navigate=useNavigate()
  const {loginAuth,setloginAuth}=useContext(Authcontext);
  console.log(loginAuth ,"inside private route");
  if(!loginAuth){
    return navigate("/login");
  }
 return children;
}

export default PrivateRoutes

