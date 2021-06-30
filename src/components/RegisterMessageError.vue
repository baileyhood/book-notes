<template>
	<p class="c-error-message">
		{{ message }}
	</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'RegisterMessageError',

	props: {
		message: {
			type: String,
			required: true
		}
	}
})
</script>

<style lang="scss">
.c-error-message {
	background-color: $color-primary-pink;
	color: $color-red;
	padding: rem-calc(10);
}
</style>
