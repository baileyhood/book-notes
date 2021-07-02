<template>
	<header class="container c-header">
		<nav class="c-nav">
			<p class="c-nav__logo">BookNotes</p>
		</nav>
	</header>
</template>

<style lang="scss">
	.c-header {
		background-color: $color-secondary-lightgrey;
		padding-top: rem-calc(20);
		padding-bottom: rem-calc(20);
	}
	.c-nav {
		&__logo {
			font-family: $font-secondary;
			font-size: rem-calc(32);
		}
	}
</style>