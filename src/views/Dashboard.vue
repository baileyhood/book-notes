<template>
	<div>
		<Navigation/>
		<main class="container">
			<AppHeadline level="2" size="3">Bestsellers</AppHeadline>
			<p v-for="(bestseller, index) in bestsellers" :key="index">
				{{ bestseller.title }}
			</p>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { nytBestsellers } from '@/api/new-york-times';
import axios from 'axios';
import AppHeadline from '@/components/AppHeadline.vue'
import Navigation from '@/components/Navigation.vue';

export default defineComponent({
	name: 'Dashboard',
	components: {
		AppHeadline,
		Navigation
	},

	data() {
		return {
			bestsellers: {}
		}
	},

	async mounted() {
		this.bestsellers = await axios
			.get(
				`${nytBestsellers.endpoints.lists}/hardcover-fiction.json?api-key=${nytBestsellers.apiKey}`
			)
			.then(response => {
				return response.data.results.books;
			});
	}
})
</script>