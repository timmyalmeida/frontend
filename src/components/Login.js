import { login } from "./Utils";
import React, { useState, useEffect,useContext } from 'react'
import {withRouter} from "react-router-dom";
import { Input, Button,message } from 'antd';
import UserContext from '../UserConetxt'

const inputStyle  = 
 {
   width: "200px",
   margin:"20 8px 8px 10"
}
   
let textInput1 = React.createRef();
let textInput2 = React.createRef();
function Login(props){
    const { dispatch, state } = useContext(UserContext);
    var jumpBack = () => {
        // 打哪儿来回哪去
        const { location } = props
        const from = location.state && location.state.from
        props.history.goBack();
    }
    const loginClick=()=>{
        

        var auth = login(textInput1.current.state.value,textInput2.current.state.value)
        if(auth!=null){
           message.info("success "+auth.auth,1)
           dispatch({type:"login",name:textInput1.current.state.value})
           jumpBack();
        }
       
       }     
         
    return (
        <div style={{width:200,margin:10}}>
            <h1>请先登录</h1>
   <Input   defaultValue="timmy" ref={textInput1} placeholder="Enter your  name"   style={inputStyle}  />
   <Input   ref={textInput2} placeholder="Enter your password"   style={inputStyle}  />
   <Button type="primary" onClick={loginClick}>login</Button>
        </div>
     )
}

export  default withRouter(Login)