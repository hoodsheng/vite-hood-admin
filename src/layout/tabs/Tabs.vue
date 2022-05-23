<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    class="demo-tabs"
    closable
    @tab-click="clickBtn"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTabsStore } from '@/store';
import { ITab } from '@/store/modules/tabs/types';
import { TabPanelName } from 'element-plus';

const route = useRoute();
const router = useRouter();
const tabsStore = useTabsStore();
const editableTabsValue = ref('');
let editableTabs = computed(() => tabsStore.getTabList);
// 设置激活菜单
const setActiveMenu = () => {
  editableTabsValue.value = route.path;
};
// 添加选项卡
const addTab = () => {
  const { path, meta } = route;
  const tab: ITab = {
    path: path,
    title: meta.title as string
  };
  tabsStore.setTab(tab);
};
// 删除选项卡
const removeTab = (name: TabPanelName) => {
  if (name === '/dashboard') return;
  let tabs = editableTabs.value;
  // console.log(editableTabs);

  let activeName = editableTabsValue.value;
  if (activeName === name) {
    tabs.forEach((tab: ITab, index: number) => {
      if (tab.path === name) {
        const nextTab = tabs[index + 1] || tabs[index - 1];
        if (nextTab) {
          activeName = nextTab.path;
        }
      }
    });
  }
  editableTabsValue.value = activeName;
  tabsStore.$state.tabList = tabs.filter((tab: ITab) => tab.path !== name);
  router.push({ path: activeName });
};

// 选项卡点击事件
const clickBtn = (tab: any) => {
  // console.log(tab.props);
  router.push(tab.props.name);
};

watch(
  () => route.path,
  () => {
    // 设置激活的选项卡
    setActiveMenu();
    // 添加选项卡
    addTab();
  }
);
// 解决数据刷新丢失的问题
const beforeRefresh = () => {
  window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('tabsView', JSON.stringify(editableTabs.value));
  });
  const tabSesson = sessionStorage.getItem('tabsView');
  if (tabSesson) {
    const oldTabs = JSON.parse(tabSesson);
    if (oldTabs.length > 0) tabsStore.$state.tabList = oldTabs;
  }
};

onMounted(() => {
  beforeRefresh();
  // 设置激活的选项卡
  setActiveMenu();
  // 添加选项卡
  addTab();
});
</script>

<style scoped lang="scss">
.el-tabs {
  box-sizing: border-box;
  padding: 4px 10px;
  background-color: #fff;
  border-top: 1px solid #d8dce5;
  border-bottom: 1px solid #d8dce5;
}

:deep(.el-tabs__header) {
  margin: 0;
  border-bottom: 0 !important;
}

:deep(.el-tabs__item) {
  height: 30px;
  padding: 0 10px !important;
  margin: 0 3px !important;
  font-size: 14px !important;
  line-height: 30px;
  color: #495060;
  text-align: center !important;
  border: 1px solid #d8dce5 !important;
  border-radius: 4px;
}

:deep(.el-tabs__nav) {
  border: none !important;
}

:deep(.el-tabs__nav-next) {
  line-height: 30px !important;
}

:deep(.el-tabs__nav-prev) {
  line-height: 30px !important;
}

:deep(.is-active) {
  color: #0082cb !important;
  background-color: #fafafa;
  border-bottom: 2px solid #0082cb !important;
}

:deep(.el-tabs__item:hover) {
  color: #0082cb !important;
  background-color: #fafafa;
}

:deep(.is-active:hover) {
  color: #0082cb !important;
  background-color: #fafafa;
}

:deep(.el-tabs__item::after) {
  position: absolute;
  top: 98%;
  left: 50%;
  width: 0;
  height: 4px;
  content: '';
  background-color: #0082cb;
  transition: all 0.5s;
}

:deep(.el-tabs__item:hover::after) {
  left: 0;
  width: 100%;
}
</style>
