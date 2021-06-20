<template>
	<div class="container">
		<AppHeadline level="1" size="1" :has-divider="true">BookNotes</AppHeadline>
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
	</div>
</template>

<script>
import { Auth } from 'aws-amplify';
import AppHeadline from '@/components/AppHeadline.vue';
import AppForm from '@/components/AppForm';
import AppInput from '@/components/AppInput';

export default {
	components: {
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