import axios from "axios"

const getUser = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'USER_LIST_REQUEST',
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
    console.log("token",userInfo.token);
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`http://34.210.129.167/api/users`, config)
  
      dispatch({
        type: 'USER_LIST_SUCCESS',
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    //   if (message === 'Not authorized, token failed') {
    //     dispatch(logout())
    //   }
      dispatch({
        type: 'USER_LIST_FAIL',
        payload: message,
      })
    }
  }
  export default getUser