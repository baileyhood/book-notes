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
						<div class="p-dashboard__slide-container">
							<button class="p-dashboard__slide-button" @click="removeFromReadLater(slotProps.slideData)">
								<img class="p-dashboard__slide-button-icon" src="@/assets/img/icons/icon-delete.svg" alt="Delete icon">
								Remove from Read Later List
							</button>
							<img
								:src="slotProps.slideData.image" 
								:alt="`${slotProps.slideData.title} book cover`"
								class="p-dashboard__slider-image"
							>
						</div>
					</template>
			</Slider>
			<hr>
			<AppHeadline level="2" size="3">New York Times Bestsellers</AppHeadline>
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
						<div class="p-dashboard__slide-container">
							<button 
								class="p-dashboard__slide-button" 
								@click="addBookToReadLater($event, slotProps.slideData)"
								:disabled="isLoading">
								<img class="p-dashboard__slide-button-icon" src="@/assets/img/icons/icon-plus-sign.svg" alt="Plus sign icon">
								Add to your Read Later list
							</button>
							<img
								:src="slotProps.slideData.book_image" 
								:alt="`${slotProps.slideData.title} book cover`"
								class="p-dashboard__slider-image"
							>
						</div>
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
			return this.$store.getters['currentBooks/getReadLaterList'];
		},

		isLoading() {
			return this.$store.getters['userInterface/getLoadingStatus'];
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

		removeFromReadLater(slideData) {
			console.log(this.$store);
			this.$store.dispatch('currentBooks/removeFromReadLaterList', {
				id: slideData.id
			})
		},

		// isDuplicateReadLater() {
		// 	return this.getReadLater
		// }
	},

	async mounted() {
		await this.$store.dispatch('newYorkTimes/fetchBestsellers');
		await this.$store.dispatch('currentBooks/fetchReadLaterList');
	}
})
</script>

<style lang="scss">
	.p-dashboard {

		&__slide-button {
			align-items: center;
			background-color: $color-primary-yellow-hover;
			border: none;
			cursor: pointer;
			display: flex;
			height: 100%;
			justify-content: center;
			position: absolute;
			transition: opacity .1s ease-in;
			width: 100%;
			opacity: 0;
		}

		&__slide-button-icon {
			margin-right: rem-calc(10);
			max-width: 20px;
		}

		&__slide-container {
			position: relative;

			&:hover {
				.p-dashboard__slide-button {
					opacity: 1;
				}
			}
		}

		&__slider-image {
			width: 100%;
		}
	}
</style>