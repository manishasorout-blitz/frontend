import React from 'react'
import "../Styles/home.css"
import Allbills from './Allbills';
import Rightbar from './Rightbar';
const Home = () => {
  return (
    <div className='home_main'>
        <div className='left_main'>
        <Rightbar/>
           </div>
        <div className='right_main'>
          <Allbills/>
        </div>
    </div>
  )
}

export default Home;