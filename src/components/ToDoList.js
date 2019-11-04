import React, { Component } from 'react';
import {Icon,Checkbox}  from 'antd';
class ToDoList extends React.Component{
    //数据父组件会传进来
    constructor(props){
        super(props)
    }

    display(finishType,finish){
        if(finishType==2){
            return "block";
        }
        else{
            return finishType==finish?"block":"none";
        }

    }
    render(){

        return(this.props.list.map((li,index)=>{
            return (

            <li key={li.id} style={{ display:this.display(this.props.finishType,li.finish),   padding:2,border:"1px solid grey",marginBottom:3, width:250,height:60,clear:"both"}} >
            <div style={{height:30,width:"100px",float:"left"}}><span>this is  {li.name}</span></div>
            
            <div style={{backgroundColor:"white" , height:20,float:"right",verticalAlign:"top"}} >
            <Icon  type="delete"/> 
            <input  type="checkbox" name={"name"+li.id} 
            checked ={li.finish==0?false:true} 
            onChange={()=>{this.props.onItemClick(li.id)}} />
            </div>

            </li>

                        );
                    }))
                
        }
}

export default ToDoList