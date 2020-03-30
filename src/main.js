import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import ('@/components/pages/Home.vue')
  },
  {
    path: '/resume',
    component: () => import ('@/components/pages/Resume.vue')
  },
  {
    path: '/person',
    component: () => import ('@/components/pages/Person.vue')
  },
  {
    path: '/contact',
    component: () => import ('@/components/pages/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
