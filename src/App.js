import React,{useReducer, useEffect, useState} from 'react';
import './App.css';
import {getLocationCon} from './components/Utils'
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import withDataSource from './components/withDataSource'
import  SearchBar  from './components/SearchBar';
import Home from './components/Home';
import NavLinkHeader from './components/NavLinkHeader'
import  {FareTable} from './components/FareTable'
import Login from './components/Login';
import loginReducer from './reducer/UserReducer'
import UserContext from './UserConetxt'

//import { GlobalStyle }  from './style.js';

const initialState = {name:"访客default",login:false};


const WithLonginRoute=(props)=>{
	return <Route 
	
	{...props} 
	render={(p)=>{
		if(props.component){
			return props.component
		}
		else{
			return props.render(p);
		}

	}}
	/>
}


const TableWithDataSource  = withDataSource(FareTable)
export default function App(props)  {
	const [state, dispatch] = useReducer(loginReducer, initialState);
	const [searchCons,setSearchCons]=useState({"dCity":"sha","aCity":"bkk"})

		var con  =getLocationCon();
        if(con!=null){
         
        }
	
	 
		//useEffect(



		//) 
	
		const search=(dCity,aCity)=>{  		
			let newcons ={searchCons: {dCity:dCity,aCity:aCity}};	
			setSearchCons(newcons)	
	}

 
 
		return(
      <div>
	 <UserContext.Provider value={{state, dispatch}}>

		
      <Router>
	
	  <NavLinkHeader></NavLinkHeader>
	     
		 <Route  exact  name="登录"     path="/login"   component={Login} />
		 <Route  exact  name="首页"     path="/"   component={Home} />			 
			 <Route path="/list" render={() => (        
			 <Route name="列表页"   path="/list"    
				render={(props) => (  
					<div>
                    <SearchBar search={ search} searchCons={ searchCons}/>
					<TableWithDataSource search={ search}  searchCons={ searchCons} />
					</div>
				
				  )}/>
				
				                                                                                                                                                                                                                                                    			    
		
 	   )}/>     
				  
			 
      
			
    </Router>       
      </UserContext.Provider>
    </div>
		)
 
		
	}
 ;
 
