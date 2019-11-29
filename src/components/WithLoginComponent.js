import React,{useContext} from 'react'
import UserContext from '../UserConetxt'


 function WithLoginComponent(Component,context){
    //const { dispatch, state } = useContext(UserContext);
    return (props)=>{

   if(!context.login){
    props.history.push("/login")
    return null
   }
    return  <Component /> 

}

}
export default WithLoginComponent
