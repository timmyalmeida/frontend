
import React, { useState, useEffect,useContext } from 'react'
import { withRouter,BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";

import {getUser, isLogin, login} from './Utils'
import loginReducer from '../reducer/UserReducer'
import UserContext from '../UserConetxt'
//const FC = ({children})=>children("BBB")
const FC = (props)=>{
   let {children} = props;
    return children()
}

  
function Home (props) {
   let [name,setname] = useState("not login")
   const { dispatch, state } = useContext(UserContext);

    
   // useEffect(
 

    // )


    
 
     if(!state.login){          
      props.history.push({ pathname:"/login",state:{ from: "/" }})
       return null
     }
      else{
       
      return  <FC>{()=><div>hello:{state.name}</div>}</FC>
         
   
      }
}
export default withRouter(Home) 
 
        