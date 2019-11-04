import React, { Component } from 'react';
import ToDoList from './ToDoList'
import Bar from './Bar';
import {Button } from 'antd';

let maxid=3;
class ToDos extends React.Component{
    constructor(){
        super()
        this.getValue =this.getValue.bind(this)
        this.addItem=this.addItem.bind(this)
        this.onItemClick=this.onItemClick.bind(this)
        this.onBarButtonClick=this.onBarButtonClick.bind(this)
        //this.state.showlist = this.state.list;
    }
     //2 是全部 1 已完成 0未完成
    state = {
        list: [{name:"title1",id:0,finish:0}, {name:"titl2",id:1,finish:0}, {name:"title3",id:2,finish:0}],
        showtype:2,
        targetValue:'work'
      };

      addItem(){
        let value = this.state.targetValue;
        let newlist = this.state.list
        newlist.push({name:value,id:maxid++,finish:0})
        this.setState({list:newlist})
      }
      getValue(e){
        this.setState({targetValue:e.target.value})
      }

      onItemClick(index){
        let newlist = this.state.list
        newlist[index].finish=newlist[index].finish==1?0:1;
        this.setState({list:newlist})

      }

      onBarButtonClick(type){
       let newdata = this.state;
       newdata.showtype = type;
       this.setState({data : newdata});
      }
    
render(){
    return (
        <div style={{margin:20}}>
        <ul style={{listStyle:"none",width:"300px"}}>
            <ToDoList finishType={this.state.showtype} list={this.state.list} onItemClick={this.onItemClick} ></ToDoList>
        </ul>
        <input type='text' value={this.state.targetValue} onChange={this.getValue}/>
        <Button  type="danger" onClick={this.addItem}>确定</Button>

        <Bar  onBarButtonClick={this.onBarButtonClick}/> 
        </div>

    )
}


 

}

export default ToDos;