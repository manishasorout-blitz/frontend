import React, { useContext, useEffect, useState } from 'react'
// const { RangePicker } = DatePicker;
import {Form,DatePicker} from 'antd'
import dayjs from "dayjs";
import { Link, useNavigate } from 'react-router-dom';
import Authcontext from '../Context/Authcontext';
import "../Styles/home.css"
const { RangePicker } = DatePicker;
const Allbills = () => {  
    const navigate=useNavigate();
    const [bills,setbills]=React.useState([]);
    const [total,settotal]=React.useState(null);
    const [searchtext,setsearchtext]=useState(null);
    const [page,setpage]=React.useState(1);
    const {loginAuth}=useContext(Authcontext);
    useEffect(()=>{
    getbills();
    },[page]);
    console.log(localStorage.getItem("token"),"token")

  async  function getbills(){    
       var res1=await fetch(`http://localhost:8080/api/v1/platform/bill/allbills?page=${page}&pageSize=5`,{
        // mode:'no-cors',
        headers:{
          token:localStorage.getItem("token")
        }
       });      
       var  res2=await res1.json();
       setbills(res2.bills);
       console.log(res2.totalpages,"response");
       settotal(res2.totalpages);       
    }
    if(!loginAuth){
      return navigate("/login");  
    }
   async function handledelete(id){
      console.log(id);
      console.log("Clicked deleted");
      var  res1=await fetch(`http://localhost:8080/api/v1/platform/bill/deletebill/${id}`,{
        method:'DELETE'
      })    
    }
    function handleprev(){
      console.log("clicked plus")
       setpage(prev=>prev-1);
    }
    function handlenext(){
      console.log("clicked next");
      setpage(prev=>prev+1);
    }
    const disabledDate = (current) => {
      // Can not select days before today and today
      return current && current > dayjs().endOf("day");
    };
   async function handlesearch(){
      console.log("search clicked",searchtext);
try {
  var res1=await fetch(`http://localhost:8080/api/v1/platform/bill/allbills?page=${page}&pageSize=5&search=${searchtext}`)
  var res2=await res1.json();
  console.log(res2.bills,"res2");
  setbills(res2.bills);
  
} catch (error) {
  console.log(error);
  
}
     

    }
  return (
    <div>
      <div className='form_search'>
      <input placeholder='Search' value={searchtext}  onChange={(e)=>setsearchtext(e.target.value)}/>
     <button onClick={handlesearch}>Search</button>
      <Form.Item
          label="Journey Date"
          name={["blog", "journyDate"]}
          rules={[{ required: true }]}
        >
          <RangePicker
            format={["DD/MM/YYYY", "DD/MM/YY"]}
            // disabledDate={disabledDate}
          />
        </Form.Item>
      </div>
        <table>
            <thead>                
                    <th>Bill title</th>
                    <th> Date</th>
                    <th>Bill Amount </th>
                    <th>Edit</th>
                    <th>Delete</th>             
            </thead>
            <tbody>
            {
            bills.map((e)=>{
                 return <>
              
                <tr>
                    <td>{e.title}</td>
                    <td>{new Date(e.expense_date).toDateString().replace(/^\S+\s/,'')}</td>
                    <td>₹ {e.amount}</td>
                    <td><Link to={`/edit/${e._id}`}><button>edit</button></Link></td>
                    <td><button onClick={()=>handledelete(e._id)}>Delete</button></td>
                </tr>
                 </>
            })
        }
        </tbody>
        </table>
        <div className='paginate'>
        <button disabled={page===1} onClick={handleprev}>prev</button>
        <p>{page}</p>
        <button disabled={page===total} onClick={handlenext}>next</button>
        </div>
      
    </div>
  )
}

export default Allbills;