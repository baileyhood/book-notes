import { createApp } from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import router from './router';

import './assets/scss/global.scss';

Amplify.configure(awsconfig);

createApp(App).use(router).mount('#app')
