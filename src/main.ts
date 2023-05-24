import { usePrimeVueComponentents } from '@/plugins/prime-vue';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// PrimeVue
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/tailwind-light/theme.css";

import './assets/main.css'

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.use(router)

usePrimeVueComponentents(app);
app.use(PrimeVue)

app.mount('#app')
