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
			state.readLaterList.push(...book)
		}
	},
	actions: {
		async fetchReadLaterList(context) {
			const booksData = await API.graphql({
				query: listReadLaterBooks
			});
			const readLaterBooks = booksData.data.listReadLaterBooks.items;
			context.commit('SET_BOOK_TO_LATER_LIST', readLaterBooks);
		},
		async addToReadLaterList(context, bookData) {
			try {
				const readLaterBook = await API.graphql({
					query: createReadLaterBook,
					variables: {input: bookData},
				});
				context.commit('SET_BOOK_TO_LATER_LIST', [readLaterBook.data.createReadLaterBook]);
			}
			catch(error) {
				console.error('Error: ', error);
			}
		}
	}
}