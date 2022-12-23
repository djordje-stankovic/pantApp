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
     { path: '/', component: App, redirect: '/home'},
  ]

  const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHistory(),
    routes, // short for `routes: routes`
    mode : history
  })

  router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    // const publicPages = ['/home'];
    
    const auth = false;

    if (auth) {
      
        return '/auth';
    }
});


createApp(App).use(store).use(router).mount('#app')
