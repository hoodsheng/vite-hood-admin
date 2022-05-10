<template>
  <div class="layout">
    <el-container>
      <el-aside class="aside">
        <MenuBar></MenuBar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MenuBar from './menu/MenuBar.vue';
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;

  .el-container {
    height: 100%;
  }

  .aside {
    width: 200px;
  }
}
</style>
