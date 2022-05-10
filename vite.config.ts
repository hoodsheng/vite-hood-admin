import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// eslint规范
import viteEslint from 'vite-plugin-eslint';
// stylelint规范
import viteStylelint from '@amatlash/vite-plugin-stylelint';
// 别名配置
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    viteEslint(),
    viteStylelint({
      // 对某些文件排除检查
      exclude: /windicss|node_modules/
    })
  ],
  server: {
    host: '0.0.0.0' // 指定服务器应该监听哪个 IP 地址
  }
});
