<template>
	<div class="p-login">
		<AppCard class="p-login__card" max-width="425">
			<AppHeadline level="1" size="1" :has-divider="true">Sign In</AppHeadline>
			<p class="u-margin-bottom-30">Sign in below to access your dashboard</p>
			<AppForm @submit.prevent="login">
				<AppInput type="email" v-model="email" placeholder="Email address" />
				<AppInput type="password" v-model="password" placeholder="Password" />
				<AppButton type="submit" level="secondary">Login</AppButton>
			</AppForm>
		</AppCard>
	</div>
</template>

<script>
import { Auth } from 'aws-amplify';
import AppButton from '@/components/AppButton.vue';
import AppCard from '@/components/AppCard.vue';
import AppHeadline from '@/components/AppHeadline.vue';
import AppInput from '@/components/AppInput.vue';

import AppForm from '@/components/AppForm';
export default {
  name: 'Login',

	components: {
		AppButton,
		AppCard,
		AppForm,
		AppHeadline,
		AppInput
	},

  data() {
    return {
      email: '',
      password: ''
    }
  },

	methods: {
		async login() {
				try {
						await Auth.signIn(this.email, this.password);
						this.$router.push({ name: 'Dashboard' });
				} catch (error) {
						alert(error.message);
				}
		},
	}
}
</script>

<style lang="scss">
.p-login {
	display: flex;
	justify-content: center;
	text-align: center;

	&__card {
		margin-top: rem-calc(100);
	}
}
</style>