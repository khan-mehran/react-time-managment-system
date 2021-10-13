import axios from "axios"

const login =(user) => async(dispatch) =>{

  dispatch({
    type: 'USER_LOGIN_REQUEST',
  })
    try {
        // const config = {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // }
    
       const data  = await axios.post(
          'http://34.210.129.167/api/login',user)
    console.log('data = ', data)
          dispatch({type: 'USER_LOGIN_SUCCESS', payload:data})
       
        console.log('kibe',data)
        dispatch({
          type: 'USER_LOGIN_SUCCESS',
          payload: data,
        })
    
        localStorage.setItem('userInfo', JSON.stringify(data))
        localStorage.setItem('token', JSON.stringify(data.data.token))
       
      } catch (error) {
        dispatch({
          type: 'USER_LOGIN_FAIL',
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
}

export default login