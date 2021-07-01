<template>
	<button 
		:class="[
			'c-button',
			`c-button--${level}`
		]">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'AppButton',

	props: {
		level: {
			type: String,
			required: true,
			default: 'primary',
			validator: (value:string) => [
				'primary',
				'secondary',
				'tertiary'
			].includes(value.toLowerCase())
		}
	},
})
</script>

style.<style lang="scss">
.c-button {
	background-color: transparent;
	border: 1px solid $color-primary-lightgrey;
	cursor: pointer;
	font-family: $font-primary;
	font-size: rem-calc(20);
	padding: rem-calc(15);
	width: 100%;
}

.c-button--primary {
	background-color: $color-primary-yellow;
	color: $color-primary-grey;
}
</style>