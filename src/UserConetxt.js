import React,{ createContext } from 'react';

 const UserContext = createContext({state:{name:"访客default2",login:false}});
 
export default UserContext