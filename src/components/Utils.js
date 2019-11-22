function GetRequest() {
  var url = window.location.search; //获取url中"?"符后的字串
  var theRequest = new Object();
  var strs;
  if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
  }
  else{
    return null 
  }
  return theRequest;
}

export function getUser(){

}

     //?d=1&a=2
export function getLocationCon(){
   var request  = GetRequest() ;
   if(request==null){
     return null;
   }else{
     var con = {};
     con["dCity"]= request["dCity"];
     con["aCity"]=request["aCity"];
     return con;
   }
}
     
     
 
export function refreshTable(dCity,acity,handler){
    let url ="http://localhost:8080/server/list/?dCity=" +dCity+"&aCity="+acity;
     
    fetch(url, {
      method: "GET",
      mode: "cors",
      headers:{
          'Accept':'application/json,text/plain,*/*'
      }}).then(checkStatus). then(Response=>Response.json()).then(handler
        //this.setState({dataSource:data})
      ) 
      .catch(
        err => console.log(err)
      );


      function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
  }

  export function login(username,pwd){
      if(username=="timmy"){
        
        localStorage.setItem("auth",JSON.stringify({name:username,auth:"xxx"}))
        return {name:username,auth:"xxx"};
      }
      else{
        return null;
      }
  }
  export function isLogin(){
    return localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):null
  }

  export function logout(){
    localStorage.removeItem("auth")
  }
