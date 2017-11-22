import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
import store from '@/store';
Vue.use(VueAxios, axios, store);

import App from './components/App.vue';
import Example from './components/Example.vue';
import Login from './components/Login.vue';
import EmailList from './components/EmailList.vue';

Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementsByName('csrf-token')[0].getAttribute('content');
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
Vue.http.options.root = 'http://localhost:8080';


const routes = [
    {
        name: 'Example',
        path: '/',
        component: Login
    },
    {
        name: 'EmailList',
        path: '/email-lists',
        component: EmailList
    }
  ];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');