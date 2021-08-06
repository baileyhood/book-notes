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
						<button class="p-dashboard__slider-button" @click="addBookToReadLater(
							slotProps.slideData.title,
							slotProps.slideData.author,
							slotProps.slideData?.isbns[0]?.isbn10
						)">
							<img 
								:src="slotProps.slideData.book_image" 
								:alt="`${slotProps.slideData.title} book cover`"
								class="p-dashboard__slider-image"
							>
						</button>
					</template>
			</Slider>
		</main>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
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
			title: '',
      isbn: '',
			author: '',
		}
	},

	computed: {
		getBestsellers() {
			return this.$store.getters['newYorkTimes/getBestsellers'];
		}
	},

	methods: {
		// ...mapActions({
		// 	fetchBestsellers: 'newYorkTimes/fetchBestsellers'
		// }),

		async addBookToReadLater(title:string, author:string, isbn:string) {
			console.log('title:', title, author, isbn);
		},
	},

	async mounted() {
		await this.$store.dispatch('newYorkTimes/fetchBestsellers');
	}
})
</script>

<style lang="scss">
	.p-dashboard {
		&__slider-button {
			background-color: transparent;
			border: none;
		}

		&__slider-image {
			width: 100%;
		}
	}
</style>