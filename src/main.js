import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import VueGtag from "vue-gtag";

import App from './App.vue'
import './index.css'


const pinia = createPinia()
const app = createApp(App)

app
    .use(router)
    .use(pinia)
    .use(VueGtag, {
        config: { id: "G-BHVFHXMXVY" }
        },
        router)
    .mount('#app')

export default app