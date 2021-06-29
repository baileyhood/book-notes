<template>
	<component 
		:is="headerLevel"
		:class="[
			headerClass,
			{
			'c-headline-divider': hasDivider,
			}
		]">
		<slot></slot>
	</component>
</template>

<script>
export default {
	props: {
		level: {
			type: String,
			required: true,
		},

		hasDivider: {
			type: Boolean,
			default: false,
		},

		size: {
			type: String,
			required: true,
			default: '1'
		}
	},

	computed: {
		headerLevel() {
			return `h${this.level}`;
		},

		headerClass() {
			return `c-headline-${this.size}`
		},
	}
}
</script>

<style lang="scss">
.c-headline-1 {
	font-size: rem-calc(50);
}

.c-headline-divider {
	position: relative;
	margin-bottom: rem-calc(20);
	padding-bottom: rem-calc(20);

	// Divider line
	&::after {
		background-color: $color-primary-lightgrey;
		bottom: 0;
		content: '';
		height: 1px;
		left: 0;
		margin: 0 auto;
		max-width: 125px;
		position: absolute;
		right: 0;
		width: 100%;
	}
}
</style>