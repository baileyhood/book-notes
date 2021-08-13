import { API } from 'aws-amplify';
import { createReadLaterBook, deleteReadLaterBook } from '@/graphql/mutations';
import { listReadLaterBooks } from '@/graphql/queries';

export default {
	namespaced: true,
	state: {
		readLaterList: []
	},
	getters: {
		getReadLaterList: state => {
			return state.readLaterList;
		}
	},
	mutations: {
		SET_BOOK_TO_LATER_LIST(state, book) {
			state.readLaterList.push(...book)
		},
		REMOVE_BOOK_LATER_LIST(state, bookId) {
			const updatedBookList = state.readLaterList.filter(book => book.id !== bookId);
			console.log('updatedBookList', bookId);
			state.readLaterList = updatedBookList;
		}
	},
	actions: {
		async fetchReadLaterList(context) {
			const booksData = await API.graphql({
				query: listReadLaterBooks,
			});
			const readLaterBooks = booksData.data.listReadLaterBooks.items;
			context.commit('SET_BOOK_TO_LATER_LIST', readLaterBooks);
		},
		async addToReadLaterList(context, bookData) {
			try {
				const readLaterBook = await API.graphql({
					query: createReadLaterBook,
					variables: {
						input: bookData
					}
				});
				context.commit('SET_BOOK_TO_LATER_LIST', [readLaterBook.data.createReadLaterBook]);
			}
			catch(error) {
				console.error('Error: ', error);
			}
		},
		async removeFromReadLaterList(context, bookData) {
			try {
				await API.graphql({
					query: deleteReadLaterBook,
					variables: {
						input: bookData
					}
				});
				context.commit('REMOVE_BOOK_LATER_LIST', bookData.id);
			}
			catch(error) {
				console.error('Error: ', error);
			}
		}
	},
}