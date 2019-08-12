const usersActions = {
    GET_USERS: 'GET_USERS',
    USERS_ERROR: 'USERS_ERROR',
    GET_SUCCESS: 'GET_SUCCESS',
    GET_ONEUSER: 'GET_ONEUSER',
    GET_ONESUCCESS: 'GET_ONESUCCESS',
    PAGE_CHANGE: 'PAGE_CHANGE',
    GET_PRACTISE: 'GET_PRACTISE',
    GET_PRACTISESUCCESS: 'GET_PRACTISESUCCESS',
    REQUEST: 'REQUEST',
    PRESUCCESS: 'PRESUCCESS',
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
    }),
    getpractise: (uid) => ({
      type: usersActions.GET_PRACTISE,
      uid: uid,
    }),
    requestPractise: () => ({
      type: usersActions.REQUEST
    }),
    preSuccess: () => ({
      type: usersActions.PRESUCCESS
    })
  };
  export default usersActions;