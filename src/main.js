import "@/assets/scss/_reset.scss"
import "@/assets/scss/_index.scss"

// main.js 또는 main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
app.use(router); // 애플리케이션에 라우터를 적용합니다.
app.mount('#app');
