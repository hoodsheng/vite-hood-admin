<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="item in tabs"
      :key="item.path"
      :to="{ path: item.path }"
      >{{ item.meta.title }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, Ref, watch, onMounted } from 'vue';
import { useRoute, RouteLocationMatched } from 'vue-router';

const route = useRoute();
//定义面包屑导航数据
const tabs: Ref<RouteLocationMatched[]> = ref([]);
const getBreadcrumb = () => {
  //获取所有有meta和title
  let matched = route.matched.filter((item) => item.meta && item.meta.title);
  // console.log(matched);
  //设置面包屑导航数据
  tabs.value = matched;
};
onMounted(() => {
  getBreadcrumb();
}),
  //路由发生变化，重新获取面包屑导航数据
  watch(
    () => route.path,
    () => getBreadcrumb()
  );
</script>
