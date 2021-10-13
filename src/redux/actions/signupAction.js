import axios from "axios"

const signup = (user) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_REGISTER_REQUEST',
    })

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // }

    const data = await axios.post(
      'http://34.210.129.167/api/register', user
      
    )
    

    dispatch({
      type: 'USER_REGISTER_SUCCESS',
      payload: data,
    })

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export default signup
