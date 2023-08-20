import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'
import TheMain from '@/components/TheMain.vue'
import TheProduct from '@/components/TheProduct.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/main',
      components: {
        theMain: TheMain,
        theProduct: TheProduct
      }
    }
  ]
})

app.component('the-main', TheMain)
app.component('the-product', TheProduct)
app.use(router)
app.mount('#app')
