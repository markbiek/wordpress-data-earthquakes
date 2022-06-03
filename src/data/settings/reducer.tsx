const initialState = {
	period: 'day',
	magnitude: 'significant',
	data: null,
	metadata: null,
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
		case 'SET_EARTHQUAKE_METADATA': {
			const { metadata } = action;

			return {
				...state,
				metadata,
			};
		}
		default:
			return state;
	}
};

export default reducer;
