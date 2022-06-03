const initialState = {
	period: 'day',
	magnitude: 'significant',
	data: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TIME_PERIOD': {
			const { period } = action;

			return {
				...state,
				period,
			};
		}
		case 'SET_EARTHQUAKE_TYPE': {
			const { magnitude } = action;

			return {
				...state,
				magnitude,
			};
		}
		case 'SET_EARTHQUAKE_DATA': {
			const { data } = action;

			return {
				...state,
				data,
			};
		}
		default:
			return state;
	}
};

export default reducer;
