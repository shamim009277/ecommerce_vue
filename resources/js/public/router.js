import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Frontend Component017
import Home from '../components/public/Home';
import UserLogin from '../components/public/auth/UserLogin';
import UserRegister from '../components/public/auth/UserRegister';
import UserDashboard from '../components/public/user/UserDashboard';
import Contact from '../components/public/pages/Contact';
import About from '../components/public/pages/About';
import Blog from '../components/public/pages/Blog';


//Backend Component
import AdminDashboard from '../components/admin/Dashboard';
import AdminLogin from '../components/admin/auth/AdminLogin';
import AdminRegister from '../components/admin/auth/AdminRegister';
//Brand
import BrandList from '../components/admin/brand/List';
import BrandAdd from '../components/admin/brand/Add';
//Category
import CategoryList from '../components/admin/category/List';
import CategoryAdd from '../components/admin/category/Add';

const routes = [
    { path: '/', component: Home, name:'Home' },
    { path: '/user_login', component: UserLogin, name:'UserLogin',

    },
    { path: '/user_register', component: UserRegister, name:'UserRegister' },

    { path: '/user/dashboard', component: UserDashboard, name: 'UserDashboard',
        beforeEnter: (to, from, next) => {
            const isAuthenticated = localStorage.getItem('UserLogin')? true:false;
            if (to.name !== 'UserLogin' && !isAuthenticated) next({ name: 'UserLogin' })
               else next()
        }
    },
    { path: '/contact', component: Contact, name:'Contact' },
    { path: '/about', component: About, name:'About' },
    { path: '/blog', component: Blog, name:'Blog' },


    //Admin Route
    { path:'/admin/dashboard',component:AdminDashboard,name:'AdminDashboard'},
    { path:'/admin/login',component:AdminLogin,name:'AdminLogin'},
    { path:'/admin/register',component:AdminRegister,name:'AdminRegister'},
    //Admin Brand
    { path:'/admin/dashboard/brand',component:BrandList,name:'BrandList'},
    { path:'/admin/dashboard/brand/add',component:BrandAdd,name:'BrandAdd'},
    //Category
    { path:'/admin/dashboard/category',component:CategoryList,name:'CategoryList'},
    { path:'/admin/dashboard/category/add',component:CategoryAdd,name:'CategoryAdd'},
  ]

  const router = new VueRouter({
    mode: 'history',
    routes
  })

export default router;
