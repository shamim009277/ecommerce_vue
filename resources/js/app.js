
require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
      key: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE',
      libraries: 'places',
    }
  });

import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from './common/index'
const store = new Vuex.Store(
    storeData
)

Vue.component('public-master', require('./components/public/PublicMaster').default);
Vue.component('example-component', require('./components/ExampleComponent').default);
Vue.component('admin-master', require('./components/admin/AdminMaster.vue').default);

import router from './public/router';
import admin_router from './admin/router';

const app = new Vue({
    el: '#app',
    router,
    admin_router,
    store,
});

