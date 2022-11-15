import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/IndexView.vue'),
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('@/views/SignInUP.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;