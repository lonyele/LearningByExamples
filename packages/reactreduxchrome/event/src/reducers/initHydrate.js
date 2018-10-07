
export default (state = {loginState: false}, action) => {
  switch (action.type) {
    case 'HYDRATE_LOGIN':
      return {
      email: action.info.email,
      loginState: action.info.loginState,
      token: action.info.token,
      userId: action.info.userId
    };




    default:
      return state;
  }
};
