import React, { Component } from 'react'
import ToDoList from './ToDoList'
import Bar from './Bar'
import {Button,Spin } from 'antd'
import {sleep2} from './Common'
import SearchBar from './SearchBar'

let maxid=3;
let init=0;
class ToDos extends React.Component{
    constructor(){
        super()
        this.getValue =this.getValue.bind(this)
        this.addItem=this.addItem.bind(this)
        this.onItemClick=this.onItemClick.bind(this)
        this.onBarButtonClick=this.onBarButtonClick.bind(this)

        this.state = {
          list: [],
          showtype:2,
          targetValue:'work',
          loading:true

        };
        //this.state.showlist = this.state.list;
    }
     //2 是全部 1 已完成 0未完成.
    
       init(){
        this.setState(
          {
            list:[{name:"title1",id:0,finish:0}, {name:"titl2",id:1,finish:0}, {name:"title3",id:2,finish:0}],
            loading:false
          } )
       }
      addItem(){
        let value = this.state.targetValue;
        let newlist = this.state.list
        newlist.push({name:value,id:maxid++,finish:0})
        this.setState({list:newlist})
      }
     

      onItemClick(index){
        let newlist = this.state.list
        newlist[index].finish=newlist[index].finish==1?0:1;
        this.setState({list:newlist})

      }
      componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate new status:",this.state.loading)
       
      }
      //组件更新结束之后执行
      componentDidMount(prevProps, prevState, snapshot) {
        if(init==0){
          //sleep2(2000);//模拟第一次加载数据
          init=1;
          setTimeout(
            ()=>{ this.init()},2000);
        }
        console.log("componentDidMount:" + this.state.loading)   
        //setTimeout(
         // ()=>{ this.setState({loading:false})},100);
          //this.setState({loading:false})
      } 
      //上次render已经完成了  
      componentWillMount (){
        console.log("componentWillMount:" + this.state.loading)   
       


      } 

      load_sleep(type){

        sleep2(1000)
        let newdata = Object.assign({}, this.state);
        newdata.showtype = type;
        newdata.loading = false;
        //this.setState({loading:false});
        this.setState(newdata);

      }
      onBarButtonClick(type){
       
        this.setState({loading:true});
        setTimeout(() =>{this.load_sleep(type)},10);
      }
    
render(){
    return (

        <div style={{margin:20,height:300}}>
           <Spin size={"small"} spinning={this.state.loading} style={{width:300,height:100,display:"block"}}>
        <ul style={{listStyle:"none",width:"300px"}}>
            <ToDoList loading={this.state.loading}  finishType={this.state.showtype} list={this.state.list} onItemClick={this.onItemClick} ></ToDoList>
        </ul>
       
        <div style={{height:50}}>
        <input type='text' value={this.state.targetValue} onChange={this.getValue}/>
        <Button  type="danger" onClick={this.addItem}>确定</Button>
          </div>
          </Spin>

        <Bar  onBarButtonClick={this.onBarButtonClick}/> 
        </div>
       

    )
}


 

}

export default ToDos;