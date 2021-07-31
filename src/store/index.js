import { createStore } from 'vuex';
import newYorkTimes from './modules/new-york-times';

export default createStore({
	modules: {
		newYorkTimes
	}
});