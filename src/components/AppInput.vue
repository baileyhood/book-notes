<template>
	<input
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
		type: {
			type: String
		},
		modelValue: {
			type: String,
			required: true,
			default: ''
		}
	},

})
</script>