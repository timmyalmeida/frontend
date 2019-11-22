import React,{useContext} from 'react';
import { Card } from 'antd';
import {SearchContext} from './FareTable'
 
export default function CardInfo (props){
  let {searchCons,count} = useContext(SearchContext)  //一句话就可以得到count
//= //searchContext;

    return (
        <div>
          {"search route:" +searchCons.dCity+"-" +searchCons.aCity+ ":" +count}
      {props.info? <Card size="small" title="information" extra={<a href="#">More</a>} style={{ width: 200 }}>
      <div>"airport:" {props.info.airport}</div>
      <div>"airline:" {props.info.airline}</div>
   
    </Card>:""

      }
   
   {props.des? <Card size="small" title="notes" extra={<a href="#">More</a>} style={{ width: 200 }}>
      <div>"notes:" {props.des.notes}</div>
      <div>"otherdata:" {props.des.otherdata}</div>
   
    </Card>:""

    }
  </div>
    )
}