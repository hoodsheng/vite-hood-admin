import { createApp } from 'vue';
import App from './App.vue';
// 引入路由
import router from './router';
// 全局引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 初始化css
import './styles/index.scss';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount('#app');
