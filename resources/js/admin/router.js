import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Example from '../components/ExampleComponent';



const admin_router = new VueRouter({
    mode: 'history',
    routes:[
        { path: '/admin/example', component: Example, name:'Example' },
    ]
  })

export default admin_router;
