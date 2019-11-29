import React,{ createContext } from 'react';

 const UserContext = createContext({state:{name:"访客default",login:false}});
 
export default UserContext