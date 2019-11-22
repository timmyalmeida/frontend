
import React from "react";
import { Input } from 'antd';
import {Button ,Select,DatePicker} from 'antd';
import {withRouter} from "react-router-dom";

const Option = Select.Option;
class SearchBar extends React.Component{

   constructor(props){
     super(props)
     this.onChange=this.onChange.bind(this);
     this.onSearch=this.onSearch.bind(this);
     this.onBlur=this.onBlur.bind(this);
     this.onFocus=this.onFocus.bind(this);
     this.onClick=this.onClick.bind(this);
     this.getValue=this.getValue.bind(this);
     this.state={"dCity":props.searchCons.dCity,"aCity":props.searchCons.aCity};

   }

   getValue(e){
    this.setState({
      [e.target.name] : e.target.value
  })

  }
 
 onChange(value) {
    console.log(`selected ${value}`);
  }
  
   onBlur() {
    console.log('blur');
  }
  
   onFocus() {
    console.log('focus');
  }
  
   onSearch(val) {
    console.log('search:', val);
  }

   onClick( ){
    this.props.history.push("/list?dCity="+this.dcityInput.value +"&aCity="+this.acityInput.value);
    this.props.search(this.dcityInput.value,this.acityInput.value);
    //this.props.history.push("/list?name="+this.dcityInput.value);


  }
  componentDidUpdate(){
    
       //this.setState({"dCity":this.props.searchCons.dCity});

     
  }
  componentDidMount(){
    
    //this.setState({"dCity":this.props.searchCons.dCity});

  
}

  componentWillReceiveProps(nextProps) {
    console.log(`this.props-->${JSON.stringify(this.props)}`);
    console.log(`nextProps-->${JSON.stringify(nextProps)}`);

     if(nextProps.searchCons!=null){
       this.setState({dCity:nextProps.searchCons.dCity,aCity:nextProps.searchCons.aCity});

     }
     
  }

  render(){
    return (
      (
  
        <div style={{marginTop:10,marginBottom:5}} >
    
    
          <table  >
            <tbody>

           
              <tr>
                  <td> <span>出发:</span><input onChange={this.getValue} name="dCity" value={this.state.dCity} ref={input => this.dcityInput = input} width='50px'  style={{height:30,marginLeft:5,marginRight:15}}    /></td>
                  <td><span>到达:</span><input onChange={this.getValue} name="aCity" value={this.state.aCity}  ref={input => this.acityInput = input} style={{height:30,marginLeft:5,marginRight:15}}   /></td>
                  <td><span>航空公司:</span><input style={{height:30,marginLeft:5,marginRight:15}}  name="airline" /></td>
                  <td><span>类型:</span>
                 
                  
                  <Select
        showSearch
        style={{ width: 200 }}
        placeholder="货物类型"
        optionFilterProp="children"
        onChange={this.onChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onSearch={this.onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">普通货物</Option>
        <Option value="lucy">特殊货物</Option>
        <Option value="tom">危险品</Option>
      </Select>
                  
                  </td>
                  <td>    <DatePicker  placeholder="出发日期"  /></td>
                  <td width="100px" style={{textAlign:"right"}}><Button onClick={this.onClick} type="primary" >搜索</Button></td>
              </tr>
              </tbody>
          </table>
         
        <div>
           
    
            
            
        
        </div>
        
        </div>
        
    
    ) 
    )
  }
}

 
  

export default withRouter(SearchBar)