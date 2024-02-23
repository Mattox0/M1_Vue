import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {messages} from "./i18n";

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    messages
})

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
