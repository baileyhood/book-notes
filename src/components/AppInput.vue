<template>
	<input
		:class="[
			'c-input',
			widthClass
		]"
		:placeholder="placeholder"
		:type="type"
		:value="modelValue"
    @input='$emit("update:modelValue", $event.target.value)'
	/>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AppInput',

	props: {
		placeholder: {
			type: String
		},
		modelValue: {
			type: String,
			required: true,
			default: ''
		},
		type: {
			type: String
		},
		width: {
			type: Number
		}
	},

	computed: {
		widthClass() {
			return `c-input--${this.width}-width`
		}
	}

})
</script>

<style lang="scss">
.c-input {
	border: 1px solid $color-primary-lightgrey;
	color: $color-primary-grey;
	font-family: $font-primary;
	font-size: rem-calc(16);
	margin-bottom: rem-calc(20);
	padding: rem-calc(15) rem-calc(10);
	width: 100%;

	&::placeholder {
		color: $color-primary-grey;
	}
}

.c-input--50-width {
	@include breakpoint('tablet-up') {
		width: calc(50% - 10px);
	}
}
</style>