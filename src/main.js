import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import {routes} from './routes';
import {store} from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history'
});

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-f1138.firebaseio.com/';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
