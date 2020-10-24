import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);// para usar rutas en los links

require('@/assets/plugins/fontawesome');

const routes = [
  {
    path:"/",
    redirect:"/Home",
  },
  {
    path:"/home",
    component:() => import ('@/components/Home'),
  },
  {
    path:"/about-me",
    component:() => import ('@/components/AboutMe'),
  },
  {
    path:"/experience",
    component:() => import ('@/components/Experience'),
    children:[
      {
        path:"/experience/One",
        component:() => import ('@/views/experience/ExperienceOne'),
      },
      {
        path:"/experience/Two",
        component:() => import ('@/views/experience/ExperienceTwo'),
      }, 
      {
        path:"/experience/Three",
        component:() => import ('@/views/experience/ExperienceThree'),
      },           
    ]
  },
  {
    path:"/skills",
    component:() => import ('@/components/Skills'),
  },  
];
const router = new VueRouter({//instancio vue router
  routes, // y va a recibir todas las rutas
});

new Vue({
  router,//tmb pasamos router a la vista principal  
  render: h => h(App),
}).$mount('#app')
