<template>
  <div class="menu" :style="{ width: !status ? '200px' : '64px' }">
    <MenuLogo v-if="!status"></MenuLogo>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      :collapse="status"
      :collapse-transition="false"
      background-color="#fff"
      text-color="#292d32"
      active-text-color="#0082cb"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <MenuItem :menuList="menuList"> </MenuItem>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHeaderStore } from '@/store';
import MenuItem from './MenuItem.vue';
import MenuLogo from './MenuLogo.vue';

let menuList = reactive([
  {
    path: '/dashboard',
    component: 'Layout',
    meta: {
      title: '首页',
      icon: 'HomeFilled',
      roles: ['sys:manage']
    },
    children: []
  },
  {
    path: '/system',
    component: 'Layout',
    alwaysShow: true,
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
        component: '/system/department/department',
        alwaysShow: false,
        name: 'department',
        meta: {
          title: '机构管理',
          icon: 'Platform',
          roles: ['sys:dept'],
          parentId: 17
        }
      },
      {
        path: '/userList',
        component: '/system/User/UserList',
        alwaysShow: false,
        name: 'userList',
        meta: {
          title: '用户管理',
          icon: 'UserFilled',
          roles: ['sys:user'],
          parentId: 17
        }
      },
      {
        path: '/roleList',
        component: '/system/Role/RoleList',
        alwaysShow: false,
        name: 'roleList',
        meta: {
          title: '角色管理',
          icon: 'Tools',
          roles: ['sys:role'],
          parentId: 17
        }
      },
      {
        path: '/menuList',
        component: '/system/Menu/MenuList',
        alwaysShow: false,
        name: 'menuList',
        meta: {
          title: '权限管理',
          icon: 'GoodsFilled',
          roles: ['sys:menu'],
          parentId: 17
        }
      }
    ]
  },
  {
    path: '/goods',
    component: 'Layout',
    alwaysShow: true,
    name: 'goods',
    meta: {
      title: '商品管理',
      icon: 'GoodsFilled',
      roles: ['sys:goods'],
      parentId: 0
    },
    children: [
      {
        path: '/goodCategory',
        component: '/goods/goodsCategory/goodsCategoryList',
        alwaysShow: false,
        name: 'goodCategory',
        meta: {
          title: '商品分类',
          icon: 'GoodsFilled',
          roles: ['sys:goodsCategory'],
          parentId: 34
        }
      }
    ]
  },
  {
    path: '/systenConfig',
    component: 'Layout',
    alwaysShow: true,
    name: 'systenConfig',
    meta: {
      title: '系统工具',
      icon: 'ElemeFilled',
      roles: ['sys:systenConfig'],
      parentId: 0
    },
    children: [
      {
        path: '/document',
        component: '/system/config/systemDocument',
        alwaysShow: false,
        name: 'http://42.193.158.170:8089/swagger-ui/index.html',
        meta: {
          title: '接口文档',
          icon: 'ElemeFilled',
          roles: ['sys:document'],
          parentId: 42
        }
      }
    ]
  }
]);
const route = useRoute();
const activeIndex = computed(() => {
  return route.path;
});
// 获取store对象
const headerStore = useHeaderStore();
const status = computed(() => headerStore.getCollapse);
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.menu {
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.3s ease;
}
@keyframes logo-animation {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }

  100% {
    transform: scale(1);
  }
}

.layout-logo {
  animation: logo-animation 1s ease-out;
}

.el-menu-vertical-demo {
  border-right: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

:deep(.el-menu-item) {
  font-weight: 600;
  color: #292d32;
}

:deep(.el-menu-item:hover) {
  color: #0082cb;
  background-color: #fafafa;
}

:deep(.el-sub-menu) {
  font-weight: 600;
  color: #292d32;
}

:deep(.el-menu-item.is-active) {
  background-color: #fafafa;
  border-right: 4px solid #0082cb;
}

:deep(.el-menu-item [class^='el-icon']) {
  width: 30px;
  height: 30px;
  font-weight: 600;
  background-color: #fafafa;
  border-radius: 8px;
}

:deep(.el-sub-menu .el-icon) {
  width: 30px;
  height: 30px;
  font-weight: 600;
  background-color: #fafafa;
  border-radius: 8px;
}

:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  margin-top: -13px;
}
</style>
