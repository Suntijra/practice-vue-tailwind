import { createApp } from 'vue'
import App from '@/App.vue'
import '@/assets/css/tailwindcss.css'
import router from '@/router/routers.js'

createApp(App).use(router).mount('#app')
