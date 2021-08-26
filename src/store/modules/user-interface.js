export default {
	namespaced: true,
	state: {
		isLoading: false
	},
	getters: {
		getLoadingStatus: state => state.isLoading
	},
	mutations: {
		/**
		 * @param {Object} state
		 * @param {Boolean} isLoading whether app is loading state or not
		 */
		SET_LOADING_STATUS(state, isLoading) {
			state.isLoading = isLoading
		}
	}
}