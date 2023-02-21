import React from 'react'
import axios from 'axios';
import "../Styles/Createbill.css"
import { useNavigate } from 'react-router-dom';
const obj={
    title:"",
    amount:"",
    expense_date:""
}
const CreateBills = () => {    
    const [state,setstate]=React.useState(obj);  
    const [auth,setauth]=React.useState(false);
    const navigate=useNavigate(); 
   async function handlesubmit(data){   
        console.log('data',data);      
        try {
         let res =await axios.post("http://localhost:8080/api/v1/platform/bill/createbills",data,{
            headers:
            {
                token:localStorage.getItem("token")
            }
         });
            console.log(res);
        setauth(true);
        navigate("/");
        } catch (error) {
            console.log(error);
            setauth(false);
        }    
    }
//   if(auth){
//   return  
//  }
    function handlechange(e){
   setstate({...state,[e.target.name]:e.target.value});   
    }
    const {title,amount,expense_date}=state;
  return (
    <div>
        <div className='form'>
                 
                <input type="text"  name="title"  value={title} onChange={handlechange} placeholder='Enter bill title'/>
                <input type="number" name="amount"  value={amount} onChange={handlechange} placeholder='Enter bill amount'/>
                <input type="date" name="expense_date"  value={expense_date} onChange={handlechange} placeholder='Enter date of expense'/>
                {/*<input type="button" value="Create Bill" /> */}
                <button onClick={()=>handlesubmit(state)}>Create Bill</button>           
        </div>
    </div>
  )
}

export default CreateBills;