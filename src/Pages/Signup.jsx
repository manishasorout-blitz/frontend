import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/Signup.css";
const Signup = () => {
    const obj={
        first_name:"",
        Last_name:"",
        email:"",
       contact_number:"",
       password:""
    }
    const [state,setstate]=React.useState(obj);
    const [auth,setisauth]=React.useState(false);
    const navigate=useNavigate();
   function handleChange(e){
    setstate({...state,[e.target.name]:e.target.value});    
   }

async function handlesubmit(data){
    console.log(data)
    try {
        var res=await axios.post('http://localhost:8080/api/v1/platform/auth/signup',data);
        console.log(res);
        setisauth(true);
    } catch (error) {
        setisauth(false);
        console.log("error",error);
    }
}
if(auth){
   return navigate("/login");}
   
   const {first_name,Last_name,email,contact_number,password}=state;
  return (
    <div className='main_singnup'>
        <div className='image_box'>
    <img className='image' src='data:image/jpeg;base64,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' alt='signup_image'/>
        </div>
        <div className='signup_form'>
         <div>
            <h3>Welcome,👋</h3>
            <p>dolorum atque eius earum! Dolor excepturi nemo deleniti fugiat labore recusandae praesentium?nemo deleniti</p>
         </div>
       
            <input placeholder='Enter First Name' name='first_name' value={first_name} onChange={handleChange}/>
            <input placeholder='Enter Last Name' name='Last_name' value={Last_name} onChange={handleChange}/>
            <input placeholder='Enter email' name='email' value={email} onChange={handleChange}/>
            <input placeholder='Enter Contact Number'name='contact_number' value={contact_number} onChange={handleChange} />
            <input  placeholder='Enter Password' name='password' value={password} onChange={handleChange}/>
            <button onClick={()=>handlesubmit(state)}>SignUp</button> 
            <div><h5>If already a User,login!</h5>
         <button onClick={()=>navigate("/login")}>Login</button>
         </div>           
       
          </div>
    </div>
  )
}
export default Signup;