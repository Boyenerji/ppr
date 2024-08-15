import './assets/main.css'
// import 'tailwindcss/tailwind.css';

// import { createApp } from 'vue'
// import App from './App.vue'

// import PrimeVue from 'primevue/config';
// import Aura from '@primevue/themes/aura';

// createApp(App).mount('#app')

// import { createApp } from "vue";
// import PrimeVue from "primevue/config";
// const app = createApp(App);

// app.use(PrimeVue, {
//     unstyled: true
// });


import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
// import PrimeVue from 'primevue/config';


// import 'primevue/resources/themes/saga-blue/theme.css';       // импорт нужной темы
// import 'primevue/resources/primevue.min.css';                 // базовые стили PrimeVue
// import 'primeicons/primeicons.css'; 

const pinia = createPinia();
const app = createApp(App);

// app.use(PrimeVue);
app.use(pinia);
app.mount('#app');