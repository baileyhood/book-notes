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

export default defineComponent({
	name: 'Dashboard',
	components: {
		AppHeadline,
		Nav,
		Slider
	},

	computed: {
		...mapGetters([
			'getBestsellers'
		]),
	},

	methods: {
		...mapActions([
			'fetchBestsellers'
		])
	},

	mounted() {
		this.fetchBestsellers();
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