import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../Styles/home.css"
const Rightbar = () => {
    const navigate=useNavigate();
    function handlebills(){
     return   navigate("/");
    }
    function handlecreate(){
      return  navigate("/create");
    }
  return (
    <div className='button_div'>
        <div onClick={handlebills} ><button>All Bills</button></div>
        <div onClick={handlecreate}><button>Create Bills</button></div>
        <div><button onClick={()=>navigate("/history")}>Edit History</button></div>
        <div></div>


    </div>
  )
}

export default Rightbar