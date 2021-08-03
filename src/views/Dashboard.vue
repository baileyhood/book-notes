<template>
	<div>
		<Nav/>
		<main class="p-dashboard container">
			<AppHeadline level="2" size="3">Bestsellers</AppHeadline>
			<Slider
				:sliderData="getBestsellers"
				:slides-per-view="2.5"
				:space-between="10"
				:cssMode="true"
				:speed="100"
				:breakpoints="{
					768: {
						slidesPerView: 5,
						spaceBetween: 50
					},
				}"
				>
					<template v-slot:default="slotProps">
						<img 
							:src="slotProps.slideData.book_image" 
							:alt="`${slotProps.slideData.title} book cover`"
							class="p-dashboard__slider-image"
						>
					</template>
			</Slider>
			<hr>
			<input type="text" v-model="title" placeholder="Title">
			<input type="text" v-model="isbn" placeholder="Isbn">
			<input type="text" v-model="author" placeholder="Author">
			<button @click="createTodo">Create Todo</button>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeadline from '@/components/AppHeadline.vue'
import Nav from '@/components/Navigation.vue';
import Slider from '@/components/Slider.vue';
import { createNamespacedHelpers } from 'vuex';
// All getters and actions namespaced to newYorkTimes module
const { mapGetters, mapActions } = createNamespacedHelpers('newYorkTimes');

import { API } from 'aws-amplify';
import { createBook } from '@/graphql/mutations';
import { listBooks } from '@/graphql/queries';

export default defineComponent({
	name: 'Dashboard',
	components: {
		AppHeadline,
		Nav,
		Slider
	},

	data() {
		return {
			title: '',
      isbn: '',
			author: '',
		}
	},

	computed: {
		...mapGetters([
			'getBestsellers'
		]),
	},

	methods: {
		...mapActions([
			'fetchBestsellers'
		]),

		async createTodo() {
      const { title, isbn, author } = this;
      if (!title || !isbn || !author) return;
      const book = { title, isbn, author };
      await API.graphql({
        query: createBook,
        variables: {input: book},
      });
      this.title = '';
      this.isbn = '';
			this.author = '';
    },

		async getTodos() {
      const books = API.graphql({
        query: listBooks
      });
			return books;
    }
	},

	async mounted() {
		this.fetchBestsellers();
		const books = await this.getTodos();
		console.log(books);
	}
})
</script>

<style lang="scss">
	.p-dashboard {
		&__slider-image {
			width: 100%;
		}
	}
</style>