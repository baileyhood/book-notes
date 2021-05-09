<template>
	<div class="container">
		<AppForm @submit.prevent="login">
			<input type="email" v-model="email" placeholder="Email address..." />
			<input type="password" v-model="password" placeholder="password..." />
			<button>Login</button>
		</AppForm>
	</div>
</template>

<script>
import { Auth } from 'aws-amplify';

import AppForm from '@/components/AppForm';
export default {
  name: 'Login',

	components: {
		AppForm
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
						alert('Successfully logged in');
				} catch (error) {
						alert(error.message);
				}
		},
	}
}
</script>