<script setup lang="ts">
import { computed } from 'vue';
import { useHeaderStore } from '@/store';
import { Fold, Expand } from '@element-plus/icons-vue';

const headerStore = useHeaderStore();

const status = computed(() => headerStore.getCollapse);
//图标切换
const changeIcon = () => {
  headerStore.SetCollapse(!status.value);
};
</script>

<template>
  <el-icon class="fa-icons" @click="changeIcon">
    <component :is="status ? Expand : Fold" />
  </el-icon>
</template>

<style scoped lang="scss">
.fa-icons {
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 20px;
  color: #303133;
  cursor: pointer;
}
</style>
