import { createStore } from 'vuex';
import axios from 'axios';
import { nytBestsellers } from '@/api/new-york-times';

export default createStore({
	state: {
		bestsellers: []
	}, 
	getters: {
		getBestsellers: state => {
			return state.bestsellers
		}
	},
	mutations: {
		SET_BESTSELLERS(state, bestsellers) {
			state.bestsellers = bestsellers
		}
	},
	actions: {
		fetchBestsellers(context) {
			axios
				.get(
					`${nytBestsellers.endpoints.lists}/hardcover-fiction.json?api-key=${nytBestsellers.apiKey}`
				)
				.then(response => {
					context.commit('SET_BESTSELLERS', response.data.results.books);
				})
				.catch(error => {
					console.error(error);
				});
		}
	}
});