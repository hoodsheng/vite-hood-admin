<template>
  <template v-for="menu in menuList" :key="menu.path">
    <el-sub-menu
      v-if="menu.children && menu.children.length > 0"
      :index="menu.path"
    >
      <template #title>
        <!-- 动态组件的使用方法 -->
        <el-icon>
          <component :is="menu.meta.icon" class="icons" />
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <MenuItem :menuList="menu.children"></MenuItem>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path">
      <!-- 动态组件的使用方法 -->
      <el-icon>
        <component :is="menu.meta.icon" class="icons" />
      </el-icon>
      <template #title>{{ menu.meta.title }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
defineProps(['menuList']);
</script>
