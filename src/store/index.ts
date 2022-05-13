import { createPinia } from 'pinia';
import useHeaderStore from './modules/header';

const pinia = createPinia();

// 创建每个模块单独的store,并导出
export { useHeaderStore };
export default pinia;
