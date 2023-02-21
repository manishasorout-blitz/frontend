import React from 'react'
import {Routes,Route} from "react-router-dom"
import CreateBills from '../Pages/CreateBills';
import Editbills from '../Pages/Editbills';
import History from '../Pages/History';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Logout from '../Pages/Logout';
import Signup from '../Pages/Signup';
import PrivateRoutes from './PrivateRoutes';
const AllRoutes = () => {
  
  return (
    <div>
         <Routes>

          <Route path='/' element={<PrivateRoutes><Home/></PrivateRoutes>}/>
          <Route path="/create" element={<PrivateRoutes><CreateBills/></PrivateRoutes>}/>
          <Route path='/edit/:id' element={<PrivateRoutes><Editbills/></PrivateRoutes>}/>
          <Route path='/logout' element={<Logout/>}/> 
          <Route path='/signup' element={<PrivateRoutes><Signup/></PrivateRoutes>}/>
          <Route path='/login'  element={<Login/>}/>


 {/* <Route path='/' element={<Home/>}/>
 <Route path="/create" element={<CreateBills/>}/>
 <Route path='/edit/:id' element={<Editbills/>}/>
 <Route path='/signup' element={<Signup/>}/>
 <Route path='/login'  element={<Login/>}/>
 <Route path='/history' element={<History/>}/> */}

        </Routes>
    </div>
  )
}

export default AllRoutes;