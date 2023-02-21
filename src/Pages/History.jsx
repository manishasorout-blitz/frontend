import axios from 'axios';
import React, { useEffect } from 'react'

const History = () => {
const [state,setstate]=React.useState([]);
useEffect(()=>{
    gethistory();
},[])
async function gethistory(){
    try {
        var res= await axios.get('http://localhost:8080/api/v1/platform/bill/history');
        console.log(res.data.history,"history of edited bills")
        setstate(res.data.history)

    } catch (error) {
        console.log("error",error);        
    }
}




  return (
    <div>
        {state.map((e)=>{
            return <div>
                  <div>{}</div>

            </div>
        })}
    </div>
  )
}

export default History