<template>
	<div>
		<Navigation/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navigation from '@/components/Navigation.vue';

export default defineComponent({
	name: 'Dashboard',
	components: {
		Navigation
	}
})
</script>