const usersActions = {
    GET_USERS: 'GET_USERS',
    USERS_ERROR: 'USERS_ERROR',
    GET_SUCCESS: 'GET_SUCCESS',
    GET_ONEUSER: 'GET_ONEUSER',
    GET_ONESUCCESS: 'GET_ONESUCCESS',
    PAGE_CHANGE: 'PAGE_CHANGE',
    getusers: () => ({
      type: usersActions.GET_USERS,
    }),
    getoneuser: (email) => ({
      type: usersActions.GET_ONEUSER,
      email: email 
    }),
    pagechange: (uid, oper) => ({
      type: usersActions.PAGE_CHANGE,
      oper: oper,
      uid: uid
    })
  };
  export default usersActions;