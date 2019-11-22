import React,{Button} from 'react';
import {Radio,Descriptions} from 'antd'

export default function DetailFare(props) {
     return (
      <div>
        <br />
        <Descriptions bordered title="">
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
          
          </Descriptions.Item>
        </Descriptions>
       
        
      </div>)
    
  }
 