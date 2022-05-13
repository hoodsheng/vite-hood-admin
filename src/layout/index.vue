<template>
  <div class="layout">
    <el-container>
      <el-aside class="aside">
        <MenuBar></MenuBar>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MenuBar from './menu/MenuBar.vue';
import Header from './header/Header.vue';
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;

  .el-container {
    height: 100%;

    .header {
      display: flex;
      align-items: center;
      background-color: #fff;
    }
  }

  .aside {
    width: auto;
    background-color: #fff;
  }

  .el-aside {
    transition: width 0.15s;
  }
}
</style>
