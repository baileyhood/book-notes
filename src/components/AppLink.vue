<template>
	<router-link class="c-link">
		<slot></slot>
	</router-link>
</template>

<style lang="scss">
.c-link {
	color: $color-primary-grey;
	font-weight: $font-weight-bold;
	position: relative;
	text-decoration: none;
	
	&::before {
		background-color: $color-primary-grey;
		bottom: -2px;
		content: '';
		height: 1px;
		left: 0;
		position: absolute;
		width: 100%;
	}
}
</style>