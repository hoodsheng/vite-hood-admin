import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: '首页',
          icon: '#icondashboard'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'Menu',
      roles: ['sys:manage'],
      parentId: 0
    },
    children: [
      {
        path: '/department',
        component: () => import('@/views/system/department/Department.vue'),
        name: 'Department',
        meta: {
          title: '机构管理',
          icon: 'Platform',
          roles: ['sys:dept']
        }
      },
      {
        path: '/userList',
        component: () => import('@/views/system/user/UserList.vue'),
        name: 'userList',
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
          roles: ['sys:user']
        }
      },
      {
        path: '/roleList',
        component: () => import('@/views/system/Role/RoleList.vue'),
        name: 'roleList',
        meta: {
          title: '角色管理',
          icon: 'Tools',
          roles: ['sys:role']
        }
      },
      {
        path: '/menuList',
        component: () => import('@/views/system/Menu/MenuList.vue'),
        name: 'menuList',
        meta: {
          title: '权限管理',
          icon: 'GoodsFilled',
          roles: ['sys:menu']
        }
      }
    ]
  },
  {
    path: '/goods',
    component: Layout,
    name: 'goods',
    meta: {
      title: '商品管理',
      icon: 'GoodsFilled',
      roles: ['sys:goods']
    },
    children: [
      {
        path: '/goodCategory',
        component: () =>
          import('@/views/goods/goodsCategory/goodsCategoryList.vue'),
        name: 'goodCategory',
        meta: {
          title: '商品分类',
          icon: 'GoodsFilled',
          roles: ['sys:goodsCategory']
        }
      }
    ]
  },
  {
    path: '/systenConfig',
    component: Layout,
    name: 'systenConfig',
    meta: {
      title: '系统工具',
      icon: 'ElemeFilled',
      roles: ['sys:systenConfig']
    },
    children: [
      {
        path: '/document',
        component: () => import('@/views/system/config/systemDocument.vue'),
        name: 'http://42.193.158.170:8089/swagger-ui/index.html',
        meta: {
          title: '接口文档',
          icon: 'ElemeFilled',
          roles: ['sys:document']
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
