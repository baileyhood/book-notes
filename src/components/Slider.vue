<template>
	<Swiper>
		
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
	}
})
</script>
