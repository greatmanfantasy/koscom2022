import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AuthLayout from '../layouts/AuthLayout.vue'
import AppLayout from '../layouts/AppLayout.vue'
import Page404Layout from '../layouts/Page404Layout.vue'

import RouteViewComponent from '../layouts/RouterBypass.vue'
import UIRoute from '../pages/admin/ui/route'

import Dashboard from '../pages/admin/dashboard/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'login' },
  },
  {
    path: '/login',
    redirect: { name: 'login' },
  },
  // 404 page
  // {
  //   path: '/prefix',
  //   component: () => import('../pages/admin/test/Test.vue'),
  // },
  {
    name: 'v1',
    path: '/v1',
    component: AppLayout,
    children: [
      {
        name: 'mydata',
        path: 'mydata',
        component: () => import('../pages/admin/mypage/mydata.vue'),
      },
      {
        name: 'input_salary',
        path: 'input_salary',
        component: () => import('../pages/admin/mypage/inputSalary.vue'),
      },
      {
        name: 'terms_agree',
        path: 'terms_agree',
        component: () => import('../pages/admin/mypage/termsOfService.vue'),
      },      
      {
        name: 'loading',
        path: 'loading',
        component: () => import('../pages/admin/mypage/loading.vue'),
      },

      {
        name: 'anticipate',
        path: 'anticipate',
        component: () => import('../pages/admin/mypage/anticipate.vue'),
      },   
      {
        name: 'custom_solution',
        path: 'custom_solution',
        component: () => import('../pages/admin/mypage/customSolution.vue'),
      },           
    ],
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('../pages/admin/dashboard/Dashboard.vue'),
      },
      UIRoute,
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        name: 'login',
        path: 'login',
        component: () => import('../pages/auth/login/Login.vue'),
      },
      {
        name: 'signup',
        path: 'signup',
        component: () => import('../pages/auth/signup/Signup.vue'),
      },
      {
        name: 'recover-password',
        path: 'recover-password',
        component: () => import('../pages/auth/recover-password/RecoverPassword.vue'),
      },
      {
        path: '',
        redirect: { name: 'login' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes,
})

export default router
