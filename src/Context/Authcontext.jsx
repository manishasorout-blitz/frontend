import React, { createContext } from 'react'
const Authcontext=createContext();

export const AuthcontextProvider=({children})=>{
    const [loginAuth,setloginAuth]=React.useState(false);
return <Authcontext.Provider value={{loginAuth,setloginAuth}}>{children}</Authcontext.Provider>
}
// const Authcontext = () => {
 
// }


export default Authcontext