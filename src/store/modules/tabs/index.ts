import { defineStore } from 'pinia';
import { ITab } from './types';
export type TabsState = {
  tabList: Array<ITab>;
};

const useTabsStore = defineStore('tabs', {
  state: (): TabsState => ({
    tabList: []
  }),
  getters: {
    // 获取菜单收缩状态
    getTabList: (state) => state.tabList
  },
  actions: {
    setTab(tab: ITab) {
      // console.log(tab);
      if (this.tabList.some((item) => item.path === tab.path)) return;
      this.tabList.push(tab);
    }
  }
});

export default useTabsStore;
