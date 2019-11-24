import React from 'react'
import { Switch,BrowserRouter as Router, Route,NavLink, Link } from "react-router-dom";
import '../nav.css'
import UserBar from './UserBar'
class NavLinkHeader extends React.Component{
  constructor(props){
        super(props)
  }

   

  render(){
      return (
        <div >

      
        <div  style={{float:"left"}}>       
        <NavLink    className="menu-link" activeClassName="active2" activeStyle={{color: '#fff'}} exact to="/"  >首页</NavLink>
        <NavLink    className="menu-link" activeClassName="active2" activeStyle={{color: '#fff'}} exact to="/home2"  >首页2</NavLink>
        <NavLink    className="menu-link" activeClassName="active2"  to="/list"  >运价列表</NavLink>
        <NavLink    className="menu-link" activeClassName="active2"  to="/us" >关于我们</NavLink>
       
        </div>
        <div style={{  clear:"right",height:30,float:"right", backgroundColor:"black", margin:0}}>
           <UserBar />
        </div>
        <div style={{clear:"both"}} />
        </div>
      )
  }



}

export default NavLinkHeader