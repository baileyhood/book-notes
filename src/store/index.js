import { createStore } from 'vuex';
import newYorkTimes from './modules/new-york-times';
import currentBooks from './modules/current-books';

export const store = createStore({
	modules: {
		currentBooks,
		newYorkTimes
	}
});