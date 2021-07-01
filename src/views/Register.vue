<template>
	<div class="p-register">
		<AppCard class="p-register__card">
			<div v-if="!formWasSubmitted"  class="p-register__form-container">
				<AppHeadline level="1" size="1" :has-divider="true">BookNotes</AppHeadline>
				<p class="p-register__text">Sign up for an account to get started with BookNotes</p>
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
					<AppButton level="primary" type="submit">Register</AppButton>
				</AppForm>
			</div>
			<div v-else >
				<RegisterMessageSuccess/>
				<AppButton level="primary">Login</AppButton>
			</div>
			<RegisterMessageError class="u-margin-top-15" v-if="hasError" :message="errorMessage" />
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
import RegisterMessageSuccess from '@/components/RegisterMessageSuccess';
import RegisterMessageError from '@/components/RegisterMessageError';

export default {
	components: {
		AppButton,
		AppCard,
		AppHeadline,
		AppForm,
		AppInput,
		RegisterMessageSuccess,
		RegisterMessageError,
	},
	data() {
		return {
			email: '',
			formWasSubmitted: false,
			hasError: false,
			errorMessage: '',
			password: '',
		}
	},
	methods: {
		async register() {
			try {
				await Auth.signUp({
					username: this.email,
					password: this.password,
				});
				this.hasError = false;
				this.formWasSubmitted = true;
			} catch (error) {
				this.hasError = true;
				this.errorMessage = error.message
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
		max-width: 425px;
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