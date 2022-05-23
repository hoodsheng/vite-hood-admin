import { defineStore } from 'pinia';

const useHeaderStore = defineStore('header', {
  state: () => ({
    collapse: false
  }),
  getters: {
    // 获取菜单收缩状态
    getCollapse: (state: { collapse: boolean }) => state.collapse
  },

  actions: {
    // 设置菜单收缩状态
    SetCollapse(payload: boolean) {
      this.collapse = payload;
    }
  }
});

export default useHeaderStore;
