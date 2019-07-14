const authActons = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT: 'LOGOUT',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  login: (email, pw) => ({
    type: authActons.LOGIN_REQUEST,
    data: {email:email, pw:pw}
  }),
  logout: () => ({
    type: authActons.LOGOUT,
  }),
};
export default authActons;
