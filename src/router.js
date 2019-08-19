import Vue from 'vue';
import Router from 'vue-router';

/**
 * Router Lazy loading 을 위한 변경
 * https://router.vuejs.org/guide/advanced/lazy-loading.html
 */
const Main     = () => import('./views/main.vue');
const Part1    = () => import('./views/part/part1.vue');
const Part2    = () => import('./views/part/part2.vue');
const Part3    = () => import('./views/part/part3.vue');
const Part4    = () => import('./views/part/part4.vue');
const Part5    = () => import('./views/part/part5.vue');
const lastPart = () => import('./views/part/lastPart.vue');

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
		{
			path: '/lastPart',
			name: 'lastPart',
			component: lastPart,
		},
	],
});
