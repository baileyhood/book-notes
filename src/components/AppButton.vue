<template>
	<component 
		:is="type"
		:class="[
			'c-button',
			`c-button--${level}`
		]"
		:to="{ name: linkTo }"
	>
		<slot></slot>
	</component>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AppButton',

	props: {
		linkTo: {
			type: String
		},

		level: {
			type: String,
			required: true,
			default: 'primary',
			validator: (value) => [
				'primary',
				'secondary',
				'tertiary'
			].includes(value.toLowerCase())
		}
	},

	computed: {
		type() {
			return this.linkTo ? 'router-link' : 'button';
		}
	}
})
</script>

style.<style lang="scss">
.c-button {
	background-color: transparent;
	border: 1px solid $color-primary-lightgrey;
	cursor: pointer;
	display: block;
	font-family: $font-primary;
	font-size: rem-calc(20);
	padding: rem-calc(15);
	text-decoration: none;
	width: 100%;
}

.c-button--primary {
	background-color: $color-primary-yellow;
	color: $color-primary-grey;
}

.c-button--secondary {
	background-color: $color-primary-blue;
}
</style>