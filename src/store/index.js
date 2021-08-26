import { createStore } from 'vuex';
import newYorkTimes from './modules/new-york-times';
import currentBooks from './modules/current-books';
import userInterface from './modules/user-interface';

export const store = createStore({
	modules: {
		currentBooks,
		newYorkTimes,
		userInterface
	}
});