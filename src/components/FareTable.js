import React, { Component,createContext,useState,Button} from 'react'
import {Modal,Table, message,Popover,Input} from 'antd'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardInfo from './CardInfo'
import  DetailFare from './DetailFare';

const {TextArea} = Input;

// 创建一个 CountContext
export const SearchContext = createContext()
export function FareTable (props){
  const [count, setCount] = useState(0)
  const [show, setModel] = useState(false)
  var showModal = () => {
    setModel(true);
  }
  
  var hideModal = () => {
    setModel(false);
  }

  var postMessage =() =>{

    //模拟发送请求回调
    const hide = message.loading('Action in progress..', 2).
    then(()=>message.info("success",1,()=>setModel(false))) 

  }

   //constructor(props){        
        //super(props);
        //this.state={dataSource:[]}
        //this.refreshTable = this.refreshTable.bind(this);
       // this.getToolTips = this.getToolTips.bind(this);
    //}

  let searchContext = {searchCons:props.searchCons,count:count};

  let getToolTips=(record)=>{
      return `<div>
       <p>"airport:" ${record.info.airport}</p>
       <p>"airline:" ${record.info.airline}</p>
       <p>"notes:" ${record.des.notes}</p>
      <p>"otherdata:" ${record.des.otherdata}</p>
      </div>`    

    }

    let columns = [
      {
        title: '出发-到达',
        dataIndex: 'route',
        key: 'route',
      },
      {
        title: 'min',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'q100',
        dataIndex: 'q100',
        key: 'q100',
      },
      {
        title: 'q300',
        dataIndex: 'q300',
        key: 'q300',
      },
      {
        title: 'q500',
        dataIndex: 'q500',
        key: 'q500',
      },
      {
        title: 'q1000',
        dataIndex: 'q1000',
        key: 'q1000',
      },
      {
        title: 'Currency',
        dataIndex: 'currency',
        key: 'currency',
      }, {
          
        title: '查看详情',
        dataIndex: 'action',
        key: 'action',
    
        render: (text, record) => (
          <span>
            {/* <a data-html ="true" data-tip ={this.getToolTips(record)}  data-place="top" data-type="info" onClick={(e)=>{message.info("aa")}}>详情1 {record.name}</a>
            <ReactToolTip html="true"  /> */}
            
            <a to="#" style={{color:'black'}} onClick={(e)=>{e.preventDefault();showModal()}} >add request</a>
           
            {/*<Divider type="vertical" /> */}
    
             
           <Popover content={ <CardInfo des= {record.description} info = {record.info} />} title="">
           <a     onClick={(e)=>{message.info("aa")}}>detail info{record.name}</a>
           </Popover>
          </span>
          
        )
      }
    ];

   
     
        return (
         
        <SearchContext.Provider value={searchContext}>
       <button onClick={() => {
            setCount(count + 1)
        }}>-</button>
        <Table dataSource={props.dataSource} columns={columns} />  
        <Modal
              title="you can submit request"
              visible={show}
              onOk={hideModal}
              onCancel={hideModal}
              okText="确认"
              cancelText="取消"
            >
            <DetailFare />
            <TextArea  placeholder="please input..."  multiple="true"  rows="5"  cols="50" />  
            <input type="button"  value="submit"  onClick={postMessage} />
            </Modal>
    

        </SearchContext.Provider>)
      
    
        }


 