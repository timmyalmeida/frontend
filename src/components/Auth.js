
import React, { useState, useEffect,useContext } from 'react'
import { withRouter,BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import UserContext from '../UserConetxt'
 

  
function Auth (props) {

   const { dispatch, state } = useContext(UserContext);
 
    useEffect(()=>{
      if(!state.login){
         props.history.push({ pathname:"/login",state:{ from: "/" }})

      }              
    }
      
      ,[]
     )

 
     
       
      return  null
         
   
      
}
export default withRouter(Auth) 
 
        