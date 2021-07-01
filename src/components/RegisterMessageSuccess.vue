<template>
	<div class="c-success-message">
		<img class="c-success-message__icon" src="@/assets/img/icons/icon-checkmark-box.svg" alt="Green checkmark icon">
		<p class="c-success-message__headline">
			Successful!
		</p>
		<p>Your BookNotes account was successfully created. Let's login:</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'RegisterMessageSuccess'
})
</script>

<style lang="scss">
.c-success-message {
	font-size: rem-calc(20);
	padding: rem-calc(30);

	&__headline {
		font-family: $font-secondary;
		font-size: rem-calc(30);
		margin-bottom: rem-calc(10);
	}

	&__icon {
		max-width: 45px;
	}
}
</style>
