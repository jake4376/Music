const frameActions = {
	SET_DATA: 'SET_DATA',
	SET_SUCCESS: 'SET_SUCCESS',
	SET_ERROR: 'SET_ERROR',
	GET_DATA: 'GET_DATA',
	GET_ONEDATA: 'GET_ONEDATA',
	GET_FRAMESUCCESS: 'GET_FRAMESUCCESS',
	setData: (data) => ({
		type: frameActions.SET_DATA,
		data: data
	}),
	getData: () => ({
		type: frameActions.GET_DATA
	}),
	getOneData: (data) => ({
		type: frameActions.GET_ONEDATA,
		data: data
	})
};

export default frameActions;