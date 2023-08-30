import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './registerServiceWorker'

import TheMain from '@/components/TheMain.vue'
import TheProduct from '@/components/TheProduct.vue'
import TheReason from '@/components/TheReason.vue'
import TheContacts from '@/components/TheContacts.vue'
import TheFooter from '@/components/TheFooter.vue'

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
        theContacts: TheContacts,
        theFooter: TheFooter
      }
    }
  ]
})

app.component('the-main', TheMain)
app.component('the-product', TheProduct)
app.component('the-reason', TheReason)
app.component('the-contacts', TheContacts)
app.component('the-footer', TheFooter)
app.use(router)
app.mount('#app')
