<template>
	<div>
		<Nav/>
		<main class="p-dashboard container">
			<AppHeadline level="2" size="3">Read Later</AppHeadline>
			<Slider
				:sliderData="getReadLater"
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
						<button class="p-dashboard__slider-button">
							<img 
								:src="slotProps.slideData.image" 
								:alt="`${slotProps.slideData.title} book cover`"
								class="p-dashboard__slider-image"
							>
						</button>
					</template>
			</Slider>
			<hr>
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
						<button class="p-dashboard__slider-button" @click="addBookToReadLater($event, slotProps.slideData)">
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

	computed: {
		getBestsellers() {
			return this.$store.getters['newYorkTimes/getBestsellers'];
		},

		getReadLater() {
			return this.$store.getters['currentBooks/getReadLaterList']
		}
	},

	methods: {
		async addBookToReadLater(event, slideData) {
			this.$store.dispatch('currentBooks/addToReadLaterList', {
				title: slideData.title,
				author: slideData.author,
				isbn: slideData.isbns[0].isbn10,
				image: slideData.book_image
			})
		},
	},

	async mounted() {
		await this.$store.dispatch('newYorkTimes/fetchBestsellers');
		await this.$store.dispatch('currentBooks/fetchReadLaterList');
	}
})
</script>

<style lang="scss">
	.p-dashboard {
		&__slider-button {
			background-color: transparent;
			border: none;
			pointer-events: cursor;
		}

		&__slider-image {
			width: 100%;
		}
	}
</style>