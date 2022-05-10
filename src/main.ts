import { createApp } from 'vue';
// 全局引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// 初始化css
import './styles/index.scss';
import App from './App.vue';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');
