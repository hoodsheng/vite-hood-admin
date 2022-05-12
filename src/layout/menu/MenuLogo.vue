<template>
  <div class="logo">
    <el-icon :size="40"><help-filled /></el-icon>
    <span class="title">hood管理系统</span>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.logo {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  border: none;

  span {
    font-size: 16px;
    font-weight: 600;
    color: #292d32;
    vertical-align: middle;
  }
}
</style>
