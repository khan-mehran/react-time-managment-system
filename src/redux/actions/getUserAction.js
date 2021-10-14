import axios from "axios"

const getUser = () => async (dispatch) => {
  dispatch({
    type: 'USER_LIST_REQUEST',
  })
  console.log('i am here')
    try {
      const obj = JSON.parse(localStorage.getItem('token'))
      console.log('obj',obj);
      const token=obj;

      const config = {
        headers: {
          Authorization: 'Bearer' +token,
          'content-type': 'application/json',
        },
      }
      const  data  = await axios.get(`http://34.210.129.167/api/users`, config)
    //   const {
    //     userLogin: { userInfo },
    //   } = getState()
    // console.log("token",userInfo);
  
      
  
      
      console.log('data data', data)
      dispatch({
        type: 'USER_LIST_SUCCESS',
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    
      dispatch({
        type: 'USER_LIST_FAIL',
        payload: message,
      })
    }
  }
  export default getUser