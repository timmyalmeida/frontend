import React, {useContext,useState,Button} from 'react'
import {logout} from './Utils'
import {withRouter} from "react-router-dom";
import UserContext from '../UserConetxt'

function UserBar(props){
    const { dispatch, state } = useContext(UserContext);
    let logoutClick=()=>{
        logout()
        dispatch({type:"logout"})
        props.history.push("/");
    }
    if(state.login){
        return (
            <div>
              <a  onClick={(e)=>{e.preventDefault();logoutClick() } }> 注销登录</a>
            </div>)
    }
    else{
        return null
    }
   
  }
  export default withRouter(UserBar)
