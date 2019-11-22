export default function loginReducer(state, action){
    switch (action.type) {
        case 'login':
        return {name:action.name,login:true}
        case 'logout':
          // keep every item except the one we want to remove
          return {name:"访客",login:false}
        default:
          return {name:"访客default",login:false};
      }
  }