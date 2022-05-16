import Vue from 'vue'
import VueRouter from 'vue-router'

import App from "@/App.vue"
import Home from "@/views/Home.vue"
import Explore from "@/views/Explore.vue"
import Notifications from "@/views/Notifications.vue"
import Messages from "@/views/Messages.vue"
import Bookmarks from "@/views/Bookmarks.vue"
import Lists from "@/views/Lists.vue"
import Profile from "@/views/Profile.vue"
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',
    component:App,
    name:'App',
  },
  {
    path:'/home',
    component:Home,
    name:'Home',
  },
  {
    path:'/explore',
    component:Explore,
    name:'Explore',
  },
  {
    path:'/notifications',
    component:Notifications,
    name:'Notifications',
  },
  {
    path:'/messages',
    component:Messages,
    name:'Messages',
  },
  {
    path:'/bookmarks',
    component:Bookmarks,
    name:'Bookmarks',
  },
  {
    path:'/lists',
    component:Lists,
    name:'Lists',
  },
  {
    path:'/profile',
    component:Profile,
    name:'Profile',
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
