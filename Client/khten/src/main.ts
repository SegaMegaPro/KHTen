import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import TheMain from '@/components/TheMain.vue'

const app = createApp(App)
app.component('the-main', TheMain)
app.mount('#app')
