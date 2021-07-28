import { createApp } from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import router from './router';
import store from './store';

import './assets/scss/global.scss';

Amplify.configure(awsconfig);

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
