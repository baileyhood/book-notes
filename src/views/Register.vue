<template>
	<div class="p-register">
		<AppCard class="p-register__card">
			<AppHeadline level="1" size="1" :has-divider="true">BookNotes</AppHeadline>
			<p class="p-register__text">Sign up for an account to get started with Book Notes</p>
			<AppForm @submit.prevent="register">
				<AppInput 
					placeholder="Enter email address"
					type="email"
					v-model="email"
				/>
				<AppInput
					id="register-password-input"
					placeholder="Enter password*"
					type="password"
					v-model="password"
					label="*must be at least 8 characters and include 1 special character"
				/>
				<label class="p-register__label" for="register-password-input">*must be at least 8 characters and include 1 special character</label>
				<AppButton level="primary">Register</AppButton>
			</AppForm>
			<MessageSuccess v-if="userIsRegistered" />
		</AppCard>
	</div>
</template>

<script>
import { Auth } from 'aws-amplify';
import AppButton from '@/components/AppButton.vue';
import AppCard from '@/components/AppCard.vue';
import AppHeadline from '@/components/AppHeadline.vue';
import AppForm from '@/components/AppForm';
import AppInput from '@/components/AppInput';
import MessageSuccess from '@/components/MessageSuccess';

export default {
	components: {
		AppButton,
		AppCard,
		AppHeadline,
		AppForm,
		AppInput,
		MessageSuccess
	},
	data() {
		return {
			email: '',
			password: '',
			userIsRegistered: false
		}
	},
	methods: {
		async register() {
			try {
				await Auth.signUp({
					username: this.email,
					password: this.password,
				});
				this.userIsRegistered = true;
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

	&__label {
		font-size: rem-calc(14);
		font-style: italic;
		margin-bottom: rem-calc(40);
	}

	&__text {
		margin-bottom: rem-calc(30);
		max-width: 280px;
		margin-left: auto;
		margin-right: auto;
	}
}
</style>