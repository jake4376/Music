const frameActions = {
	SET_DATA: 'SET_DATA',
	SET_SUCCESS: 'SET_SUCCESS',
	SET_ERROR: 'SET_ERROR',
	GET_DATA: 'GET_DATA',
	GET_FRAMESUCCESS: 'GET_FRAMESUCCESS',
	UPDATE: 'UPDATE',
	DELETE: 'DELETE',
	setData: (data) => ({
		type: frameActions.SET_DATA,
		data: data
	}),
	getData: () => ({
		type: frameActions.GET_DATA
	}),
	upDate: (change) => ({
		type: frameActions.UPDATE,
		data: change
	}),
	onDelete: (id) => ({
		type: frameActions.DELETE,
		id: id
	}),
	getStatus: () => ({
		type: frameActions.SET_ERROR
	})
};

export default frameActions;