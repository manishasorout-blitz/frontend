import axios from 'axios';
import React, { useEffect } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom';
import "../Styles/Createbill.css"


const Editbills = () => {  
  const [bill,setbill]=React.useState({});
  const [auth,setauth]=React.useState(false);
  const navigate=useNavigate();
  useEffect(()=>{
    getById()
  },[])
  const obj={
    title:bill.title,
    amount:bill.amount,
    expense_date:bill.expense_date,
}
console.log(bill,"billsss");
const {id}=useParams();
    console.log(id);  
    const [state,setstate]=React.useState(obj);   
    console.log(state,"line 188888")
   async function handlesubmit(data){   
        console.log("clicked");
        try{
          const res1 = await axios.put(`http://localhost:8080/api/v1/platform/bill/editbill/${id}`,data,{
            mode:'no-cors'
          });
          setauth(true);
          console.log(res1);
        }catch(error){
          setauth(false);
          console.log(error);
        } 
    }
    if(auth){
      return  navigate("/")
      }
  async  function getById(){
     var res1=await fetch(`http://localhost:8080/api/v1/platform/bill/billbyid/${id}`)
     var res2=await res1.json();
     console.log(res2);
     setstate(res2);
    //  console.log(bill.title);
    }
    
    function handlechange(e){
   setstate({...state,[e.target.name]:e.target.value});   
    }
    const {title,amount,expense_date}=state;
    
    // console.log(state,"line 45555555555555")
  return (
    <div>
        <div className='form'>                 
                <input type="text"  name="title"  value={title} onChange={handlechange} placeholder='Enter bill title'/>
                <input type="text" name="amount"  value={amount} onChange={handlechange} placeholder='Enter bill amount'/>
                <input type="date" name="expense_date"  value={expense_date} onChange={handlechange} placeholder='Enter date of expense'/>
                {/* <input type="button" value="Create Bill" /> */}
                <button onClick={()=>handlesubmit(state)}>Edit Bill</button>
           
        </div>
    </div>
  )
}

export default Editbills