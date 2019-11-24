import React,{useContext,useEffect} from 'react';
import UserContext from "../UserConetxt"
import { BrowserRouter as Router, Route, Link,Redirect,withRouter } from "react-router-dom";

function WithLonginRoute(props){
	//const { dispatch, state } = useContext(UserContext);     
	if(true){          
        props.history.replace({ pathname:"/login"})
        //return <Route    path="/login" component={Login} />
        return null
        //return <Redirect to={{pathname: '/login'}}/>
    }

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
export default withRouter(WithLonginRoute)