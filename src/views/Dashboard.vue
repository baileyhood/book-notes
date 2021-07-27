<template>
	<div>
		<Nav/>
		<main class="container">
			<AppHeadline level="2" size="3">Bestsellers</AppHeadline>
			<Slider
				:sliderData="bestsellers"
				:slides-per-view="5"
				:space-between="50"
				>
					<template v-slot:default="slotProps">
						<img :src="slotProps.slideData.book_image" :alt="`${slotProps.slideData.title} book cover`">
						{{ slotProps.slideData.title }}
					</template>
			</Slider>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { nytBestsellers } from '@/api/new-york-times';
import axios from 'axios';
import AppHeadline from '@/components/AppHeadline.vue'
import Nav from '@/components/Navigation.vue';
import Slider from '@/components/Slider.vue';

export default defineComponent({
	name: 'Dashboard',
	components: {
		AppHeadline,
		Nav,
		Slider
	},

	data() {
		return {
			bestsellers: []
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