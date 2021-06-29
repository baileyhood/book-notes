<template>
	<div class="p-register">
		<AppCard class="p-register__card">
			<AppHeadline level="1" size="1" :has-divider="true">BookNotes</AppHeadline>
			<p class="p-register__text">Sign up for an account to get started with Book Notes</p>
			<AppForm @submit.prevent="register">
				<AppInput 
					type="email"
					v-model="email"
					placeholder="Enter email address"
				/>
				{{ email }}
				<AppInput
					type="password"
					v-model="password"
					placeholder="Enter password"
				/>
				{{password}}
				<button>Register</button>
			</AppForm>
		</AppCard>
	</div>
</template>

<script>
import { Auth } from 'aws-amplify';
import AppCard from '@/components/AppCard.vue';
import AppHeadline from '@/components/AppHeadline.vue';
import AppForm from '@/components/AppForm';
import AppInput from '@/components/AppInput';

export default {
	components: {
		AppCard,
		AppHeadline,
		AppForm,
		AppInput
	},
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		async register() {
			console.log('email: ', this.email);
			try {
				await Auth.signUp({
					username: this.email,
					password: this.password,
				});
				alert('User successfully registered. Please login');
			} catch (error) {
				alert(error.message);
			}
		},
	}
}
</script>

<style lang="scss">
.p-register {
	display: flex;
	justify-content: center;
	text-align: center;

	&__card {
		margin-top: rem-calc(100);
	}

	&__text {
		margin-bottom: rem-calc(30);
		max-width: 250px;
		margin-left: auto;
		margin-right: auto;
	}
}
</style>