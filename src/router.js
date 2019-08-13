import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/main.vue';
import Part1 from './views/part/part1.vue';
import Part2 from './views/part/part2.vue';
import Part3 from './views/part/part3.vue';
import Part4 from './views/part/part4.vue';
import Part5 from './views/part/part5.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: Main,
    },
    {
      path: '/part1',
      name: 'part1',
      component: Part1,
    },
    {
      path: '/part2',
      name: 'part2',
      component: Part2,
    },
    {
      path: '/part3',
      name: 'part3',
      component: Part3,
    },
    {
      path: '/part4',
      name: 'part4',
      component: Part4,
    },
    {
      path: '/part5',
      name: 'part5',
      component: Part5,
    },
  ],
});
