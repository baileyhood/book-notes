<template>
	<div>
		<Nav/>
		<main class="container">
			<AppHeadline level="2" size="3">Bestsellers</AppHeadline>
			<Swiper
				navigation
				:slides-per-view="5"
				:space-between="50"
				>
				<SwiperSlide 
					v-for="(bestseller, index) in bestsellers" 
					:key="index"
				>
					<img :src="bestseller.book_image" :alt="`${bestseller.title} book cover`">
					{{ bestseller.title }}
				</SwiperSlide>
			</Swiper>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { nytBestsellers } from '@/api/new-york-times';
import axios from 'axios';
import AppHeadline from '@/components/AppHeadline.vue'
import Nav from '@/components/Navigation.vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default defineComponent({
	name: 'Dashboard',
	components: {
		AppHeadline,
		Nav,
		Swiper,
		SwiperSlide
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