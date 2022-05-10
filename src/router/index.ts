import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
