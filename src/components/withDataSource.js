import React,{useState , createContext,useEffect } from 'react'
import  {refreshTable,getLocationCon} from './Utils'
import SearchBar from './SearchBar'
import { isMobileDevice } from 'rc-menu/lib/util'
import { checkPropTypes } from 'prop-types'



let  withDataSource=(Component)=>(props)=>{
    const [dataSource, setDataSource] = useState([])
    //const [search] = useState(props.searchCons);
    

        var con  =getLocationCon();
        if(con!=null){
          //this.state={searchCons:con,dataSource:props.dataSource};
        }else{
            //this.state={searchCons:{"dCity":"sha","aCity":"bkk"},dataSource:props.dataSource};
        }

        useEffect(() => {	
            var con  =getLocationCon();
            if(con!=null){
              refreshTable(con.dCity,con.aCity,(data)=>{
    
                setDataSource(data)
            });
            }
    
          },[props.searchCons.dCity,props.searchCons.aCity]);

        return  <Component {...props} dataSource= {dataSource} />

    
    }
 
    //componentWillReceiveProps(nextProps) {
        

        //let serachKey= this.nextProps.history.location.serch;
        ///name =111
        //const query = nextProps.history.location.search // '?s=1&f=7'
        //const dcity = query.split('=')[1] // ['?s=', 'f=7']
        //const dcity = query.split('=')[1] // ['?s=', 'f=7']
        //console.log("name is :"+ name); 
       // var con  =getLocationCon();
        //if(con!=null){
          //this.state={searchCons:con};
          //refreshTable(con.dCity,con.aCity,(data)=>{
// this.setState({dataSource:data,searchCons:con})
       // });
       // }
       
      
        //this.setState({dataSource:this.nextProps.dataSource})
        // 发现 this.props 不是最新的，是上一次的值
        //console.log("触发了 componentWillReceiveProps", '子组件的props值：',this.props.value, '--- nextProps:',nextProps.value)
        // 触发了 componentWillReceiveProps 子组件的props值： 0 --- nextProps: 1
      
      
     // componentDidMount(prevProps, prevState, snapshot){
         // var con  =this.state.searchCons;
       // refreshTable(con.dCity,con.aCity,(data)=>{

           // this.setState({dataSource:data,searchCons:con})
        //});

   // }
 
        //return (
           // <div> 
               // {checkPropTypes.children}
                                  
                //<SearchBar  searchCons = {props.searchCons} search = {props.search}/>                      
                //<FareTable dataSource = {propsdataSource} searchCons={props.searchCons}/>
          //  </div>)     
         
//}
 
//Fare.defaultProps={
    //searchCons:{"dCity":"sha","aCity":"bkk"},
    //dataSource:[]
//}
    
export default  withDataSource

    
        
        
 