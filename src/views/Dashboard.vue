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
			<input type="text" v-model="name" placeholder="Todo name">
			<input type="text" v-model="description" placeholder="Todo description">
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
import { createTodo } from '@/graphql/mutations';
import { listTodos } from '@/graphql/queries';

export default defineComponent({
	name: 'Dashboard',
	components: {
		AppHeadline,
		Nav,
		Slider
	},

	data() {
		return {
			name: '',
      description: ''
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
      const { name, description } = this;
      if (!name || !description) return;
      const todo = { name, description };
      await API.graphql({
        query: createTodo,
        variables: {input: todo},
      });
      this.name = '';
      this.description = '';
    },

		async getTodos() {
      const todos = await API.graphql({
        query: listTodos
      });
			console.log(todos);
    }
	},

	async mounted() {
		this.fetchBestsellers();
		this.getTodos();
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