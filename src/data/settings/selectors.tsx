export const getPeriod = (state) => state?.period;
export const getMagnitude = (state) => state?.magnitude;
export const getData = (state, period, magnitude) => {
	return { data: state?.data, metadata: state?.metadata };
};
