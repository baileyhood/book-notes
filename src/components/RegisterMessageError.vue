<template>
	<div class="c-error-message">
		<p>{{ message }}</p>
	</div>
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
	align-items: center;
	background-color: $color-primary-pink;
	color: $color-red;
	display: flex;
	margin-right: rem-calc(10);
	padding: rem-calc(10);
	text-align: left;

	&__icon {
		height: 15px;
	}
}
</style>
