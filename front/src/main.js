/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import authCom from './components/authPage.vue'
import store from './store'
import * as VueRouter from 'vue-router';
import mainComponent from './components/mainComponent.vue'



const routes = [
    { path: '/home', component: mainComponent ,},
     { path: '/auth', component: authCom },
     { path: '/', component: App, meta: {
      requiresAuth: true
    },
     redirect: '/home'},
  ]

  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
    mode : history
  })

  // router.beforeEach((to, from, next) => {
  //  console.log(store.getters.isLogInUser)
  //     if (!store.getters.isLogInUser) {
  //       //console.log('authCom')
  //       //next('/auth')
  //     } else {
  //       //next('/home') // go to wherever I'm going
  //     }
   
  // })
  



createApp(App).use(store).use(router).mount('#app')
