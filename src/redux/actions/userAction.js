import axios from "axios"

const user = (user) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_CREATED_REQUEST',
    })

  const obj = JSON.parse(localStorage.getItem('token'))
  console.log('obj',obj);
  const token=obj;

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer'+token
        
      },
    }

   const data = await axios.post(
      'http://34.210.129.167/api/users', user,
      config
    )
   
    dispatch({
      type: 'USER_CREATED_SUCCESS',
      payload: data,
    })

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: 'USER_CREATED_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export default user
