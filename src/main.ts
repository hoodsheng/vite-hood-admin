import { createApp } from 'vue';
import App from './App.vue';
// 引入路由
import router from './router';
// 引入store
import store from './store/index';
// 全局引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 初始化css
import './styles/index.scss';
// if you're using CDN, please remove this line.
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount('#app');
