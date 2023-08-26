import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'

import TheMain from '@/components/TheMain.vue'
import TheProduct from '@/components/TheProduct.vue'
import TheReason from '@/components/TheReason.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/main',
      components: {
        theMain: TheMain,
        theProduct: TheProduct,
        theReason: TheReason,
      }
    }
  ]
})

app.component('the-main', TheMain)
app.component('the-product', TheProduct)
app.component('the-reason', TheReason)
app.use(router)
app.mount('#app')
