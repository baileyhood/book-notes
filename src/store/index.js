import { createStore } from 'vuex';
import newYorkTimes from './modules/new-york-times';

export const store = createStore({
	modules: {
		newYorkTimes
	}
});