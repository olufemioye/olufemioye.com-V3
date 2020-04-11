import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

// Animation on Scroll Library
import AOS from 'aos';
import "aos/dist/aos.css";

// Global components
import CTA from '@/components/snippets/CTA';
Vue.component('CTA', CTA);


//Routes
const routes = [
  {
    path: '/',
    component: () => import ('@/components/pages/Home.vue'),
    meta: {
      page: 'Home'
    }
  },
  {
    path: '/resume',
    component: () => import ('@/components/pages/Resume.vue'),
    meta: {
      page: 'Resume'
    }
  },
  {
    path: '/person',
    component: () => import ('@/components/pages/Person.vue'),
    meta: {
      page: 'Person'
    }
  },
  {
    path: '/contact',
    component: () => import ('@/components/pages/Contact.vue'),
    meta: {
      theme: 'dark',
      page: 'Contact'
    }
  }
]

// Router
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init({
      once: true
    })
  },
  router,
  render: h => h(App),
}).$mount('#app')
