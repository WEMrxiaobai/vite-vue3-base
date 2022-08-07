import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'static', // 指定生成静态资源的存放路径
  },
  server: {
    port: 2000, // 你需要定义的端口号
    cors: true, // 默认启用并允许任何源
    open: true, // open支持boolean/string类型，为true时打开默认浏览器，为string类型时，打开指定浏览器，具体查看官网即可
    proxy: { // 配置本地代理地址
      // '/gateway': 'https://midg.zjnydsj.com:8043',
    },
    host: 'localhost',	// ← 新增内容 ←
    // true 则热更新，false 则手动刷新，默认值为 true
    inline: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'), // 路径别名            "#": resolve(__dirname, 'node_modules'), // 路径别名
      "#": resolve(__dirname, 'node_modules'), // 路径别名
    },
    extensions: ['.js', '.vue', '.json', '.ts', 'node_modules'] // 使用路径别名时想要省略的后缀名，可以自己增减
  },
})
