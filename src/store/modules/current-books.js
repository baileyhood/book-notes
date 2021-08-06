import { API } from 'aws-amplify';
import { createReadLaterBook } from '@/graphql/mutations';
import { listReadLaterBooks } from '@/graphql/queries';

export default {
	namespaced: true,
	state: {
		readLaterList: []
	},
	getters: {
		getReadLaterList: state => {
			return state.readLaterList
		}
	},
	mutations: {
		SET_BOOK_TO_LATER_LIST(state, book) {
			state.readLaterList = book
		}
	},
	actions: {
		async fetchReadLaterList() {
			const books = API.graphql({
				query: listReadLaterBooks
			});
			return books;
		},
		async addToReadLaterList(bookData) {
      await API.graphql({
        query: createReadLaterBook,
        variables: {input: bookData},
      });
		}
	}
}