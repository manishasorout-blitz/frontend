import React from 'react'
const initial={
    isAuth:false
}
const Reducer = (state=initial,action) => {
switch(action.type){
    case "auth":{
        return {...state,isAuth:action.payload}
    }
    default :{
        return state;
    }
}
  
}

export default Reducer