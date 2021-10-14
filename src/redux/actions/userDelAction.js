import axios from "axios"

const deleteUser = (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'USER_DELETE_REQUEST',
      })
      const obj = JSON.parse(localStorage.getItem('token'))
      console.log('obj',obj);
      const token=obj;
    //   const {
    //     userLogin: { userInfo },
    //   } = getState()
  
      const config = {
        headers: {
            Authorization: 'Bearer' +token,
        },
       
      }
  
      await axios.delete(`http://34.210.129.167/api/users/${id}`, config)
  
      dispatch({ type: 'USER_DELETE_SUCCESS' })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      
      dispatch({
        type: 'USER_DELETE_FAIL',
        payload: message,
      })
    }
  }
  export default deleteUser