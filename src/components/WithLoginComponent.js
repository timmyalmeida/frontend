import React,{useContext} from 'react'
import UserContext from '../UserConetxt'

 function withLoginComponent(Component){
    const FC =   (props)=>{
        const {state } = useContext(UserContext);
        if(!state.login){
            props.history.push("/login")
            return null         
        }
        return  <Component {...props} /> 
    }

    return FC
   

}
export default withLoginComponent
