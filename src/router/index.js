import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Edit from '@/components/Edit'
import Map from '@/components/Map'
import Auth from '@/components/Auth'
import Dashboard from '@/components/Dashboard'
import auth from '@/auth'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/Post',
    name: 'Post',
    component: Post,
    meta: { requireAuth: true }
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    props: true
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
    meta: { requireAuth: true }
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/login',
    name: 'login',
    component: Auth,
    meta: { guestOnly: true }
  },
  { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requireAuth: true } },
  { path: '*', redirect: '/home' }]
export const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = auth.user()
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)

  if (requireAuth && !currentUser) next('auth')
  else if (guestOnly && currentUser) next('dashboard')
  else next()
})
