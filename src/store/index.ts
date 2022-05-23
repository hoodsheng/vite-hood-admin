import { createPinia } from 'pinia';
import useHeaderStore from './modules/header';
import useTabsStore from './modules/tabs';

const pinia = createPinia();

// 创建每个模块单独的store,并导出
export { useHeaderStore, useTabsStore };
export default pinia;
