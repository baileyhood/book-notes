<template>
	<Swiper
		class="c-slider"
		navigation
		:slides-per-view="slidesPerView"
		:space-between="spaceBetween"
	>
		<SwiperSlide
			v-for="(slideData, index) in sliderData" 
			:key="index"
		>
			<slot :slideData="slideData"></slot>
		</SwiperSlide>
	</Swiper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default defineComponent({
	name: 'Slider',

	components: {
		Swiper,
		SwiperSlide
	},

	props: {
		slidesPerView: {
			type: Number,
			required: true
		},
		spaceBetween: {
			type: Number,
			required: true
		},
		sliderData: {
			type: Array,
			required: true
		}
	}
})
</script>

<style lang="scss">
.c-slider {

	@include breakpoint(tablet-up) {
		padding: 0 rem-calc(40);
	}

	.swiper-button-prev,
	.swiper-button-next {
		// hide on mobile
		display: none;

		&::after {
			color: $color-primary-grey;
			font-size: rem-calc(20);
		}

		@include breakpoint(tablet-up) {
			display: block;
		}
	}

	.swiper-button-next {
		right: -8px;
	}

	.swiper-button-prev {
		left: -0;
	}
}
</style>
