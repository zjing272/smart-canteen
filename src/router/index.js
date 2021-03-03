import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由懒加载
const Schedule = () => import('../views/menu/Schedule');
const MenuInfo = () => import('../views/menu/MenuInfo');
const NewDishes = () => import('../views/menu/NewDishes');
const DishesInfo = () => import('../views/menu/DishesInfo');


const routes = [
  {
   path: '',
   redirect: '/menu/schedule'
  },
  {
    path: '/menu/schedule',
    component: Schedule,
  },
  {
    path: '/menu/menuInfo',
    component: MenuInfo,
  },
  {
    path: '/menu/newDishes',
    component: NewDishes,
  },
  {
    path: '/menu/dishesInfo',
    component: DishesInfo,
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
