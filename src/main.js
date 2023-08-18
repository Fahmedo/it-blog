import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Toaster from '@meforma/vue-toaster';

import App from './App.vue';
import router from './router';
import './assets/tailwind.css'

const app = createApp(App);

app.use(createPinia());
app.use(Toaster);
app.use(router);

app.mount('#app');
