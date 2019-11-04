import React, { Component }  from 'react'
import {Button } from 'antd';
var styles = {
    'title': {
      marginRight: 10,
      fontSize: 20
    },
  
    'footbutton': {
      marginTop: 20,
      marginRight:2
    }
  }
  
class Bar extends React.Component{

    //数据父组件会传进来
    constructor(props){
        super(props)
    }

    render(){
        return (


            <div>
           <hr></hr>
           <Button onClick={()=>{this.props.onBarButtonClick(2)}} type="primary" value="0" style={styles.footbutton}>全部任务</Button>
           <Button onClick={()=>{this.props.onBarButtonClick(1)}}  type="primary" value="1" style={styles.footbutton}>已完成</Button>
           <Button onClick={()=>{this.props.onBarButtonClick(0)}}  type="primary" value="2" style={styles.footbutton}>未完成</Button>


            </div>
        )
    }
}
export default Bar;