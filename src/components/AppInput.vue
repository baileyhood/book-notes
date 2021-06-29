<template>
	<input
		class="c-input"
		:placeholder="placeholder"
		:type="type"
		:value="modelValue"
    @input='$emit("update:modelValue", $event.target.value)'
	/>
</template>

<script lang="ts">
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
	},

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

	&::placeholder {
		color: $color-primary-grey;
	}
}
</style>