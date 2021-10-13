

const userReducer=(state={},action)=>{
    console.log(action);
      switch(action.type){
          case 'USER_CREATED_REQUEST':
              return { loading: true }
            case 'USER_CREATED_SUCCESS':
              return { loading: false, userInfo: action.payload }
            case 'USER_CREATED_FAIL':
              return { loading: false, error: action.payload }
            case 'USER_LOGOUT':
              return {}
            default:
              return state
      }
  }
  export default userReducer