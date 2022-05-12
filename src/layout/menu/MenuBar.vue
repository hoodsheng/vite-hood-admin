<template>
  <MenuLogo></MenuLogo>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#fff"
    text-color="#292d32"
    active-text-color="#0082cb"
    @open="handleOpen"
    @close="handleClose"
  >
    <MenuItem :menuList="menuList"> </MenuItem>
  </el-menu>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
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

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.el-menu-vertical-demo {
  height: calc(100vh - 60px);
  border-right: none;
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
