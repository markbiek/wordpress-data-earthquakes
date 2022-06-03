import * as actions from './actions';
import * as selectors from './selectors';
import reducer from './reducer';
import * as resolvers from './resolvers';

export const STORE_KEY = 'earthquake/settings';

export const STORE_CONFIG = {
	actions,
	reducer,
	selectors,
	resolvers,
};
