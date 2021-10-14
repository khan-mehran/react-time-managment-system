const userDelReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_DELETE_REQUEST':
        return { loading: true }
      case 'USER_DELETE_SUCCESS':
        return { loading: false, success: true }
      case 'USER_DELETE_FAIL':
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export default userDelReducer