<template>
	<div class="p-register">
		<AppCard class="p-register__card" max-width="425">
			<div v-if="!formWasSubmitted"  class="p-register__form-container">
				<AppHeadline level="1" size="1" :has-divider="true">BookNotes</AppHeadline>
				<p class="p-register__text">Sign up for an account to get started with BookNotes</p>
				<AppForm @submit.prevent="register">
					<AppInput
						placeholder="First name"
						type="text"
						v-model="firstName"
						:width="50"
					/>
					<AppInput
						placeholder="Last name"
						type="text"
						v-model="lastName"
						:width="50"
					/>
					<AppInput 
						placeholder="Email address"
						type="email"
						v-model="email"
					/>
					<AppInput
						placeholder="Password"
						type="password"
						v-model="password"
					/>
					<AppButton level="primary" type="submit">Register</AppButton>
					<p class="p-register__sign-in-text">Already registered? <AppLink :to="{name: 'Login'}">Sign In</AppLink></p>
				</AppForm>
			</div>
			<div v-else >
				<RegisterMessageSuccess/>
				<AppButton linkTo="Login" level="primary">Login</AppButton>
			</div>
			<RegisterMessageError v-if="hasError" class="u-margin-top-15"  :message="errorMessage" />
		</AppCard>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import { Auth } from 'aws-amplify';
import AppButton from '@/components/AppButton.vue';
import AppCard from '@/components/AppCard.vue';
import AppHeadline from '@/components/AppHeadline.vue';
import AppForm from '@/components/AppForm.vue';
import AppInput from '@/components/AppInput.vue';
import AppLink from '@/components/AppLink.vue';
import RegisterMessageSuccess from '@/components/RegisterMessageSuccess.vue';
import RegisterMessageError from '@/components/RegisterMessageError.vue';

export default defineComponent({
	name: 'Register',
	components: {
		AppButton,
		AppCard,
		AppHeadline,
		AppForm,
		AppInput,
		AppLink,
		RegisterMessageSuccess,
		RegisterMessageError,
	},
	data() {
		return {
			firstName: '',
			lastName: '',
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
					attributes: {
						'custom:firstName': this.firstName,
						'custom:lastName': this.lastName,
					}
				});
				this.hasError = false;
				this.formWasSubmitted = true;
			} catch (error) {
				this.hasError = true;
				this.errorMessage = error.message
			}
		},
	}
});
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

	&__sign-in-text {
		margin-top: rem-calc(30);
		width: 100%;
	}

	&__text {
		margin-bottom: rem-calc(30);
		max-width: 280px;
		margin-left: auto;
		margin-right: auto;
	}
}
</style>