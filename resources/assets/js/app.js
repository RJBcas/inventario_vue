
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import vueRouter from 'vue-router';
import routes from './routes.js';
import App from './components/App.vue';
import VueHotkey from 'v-hotkey';
window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(vueRouter);
Vue.use(VueHotkey);

const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes:routes
})


new Vue(Vue.util.extend({ router }, App)).$mount('#app');