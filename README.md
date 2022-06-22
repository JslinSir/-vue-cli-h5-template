# vue-cli-h5-template
 基于vue-cli 的 H5 模板
 vue-cli + vue3 + vue-router + vant
## 开始
```
npm install
npm start
```
## 多环境支持
- .env 全局配置
- .env.dev 开发配置项
- .env.sit 测试环境配置项
- .env.uat  预发布环境配置项
- .env.prod  生产配置项

## 适配
- px-to-viewport (所见即所得  设计稿750)
- 安全区  safe-area-bottom
## 路由
- vue-router 

## 网络
- 基于fetch 异步封装

## 组件库
- vant
  
## 调试
- vconsole
- 基于模式的动态引入
```html
  <% if (NODE_ENV!=='prod') { %>
    <script src="https://unpkg.com/vconsole@latest/dist/vconsole.min.js"></script>
    <script>
      // VConsole will be exported to `window.VConsole` by default.
      var vConsole = new window.VConsole();
    </script>
  <% } %>
```

## 打包
```bash
npm run build:prod
```

## 样式重置
长按，高亮，图片拖拽，按钮点击阴影 等

## 目录结构
```
|- src  项目代码目录文件
   |- assets   资源文件(图片，公共样式)
   |- constants  公共常量
   |- helpers  帮助类 
   |- pages    页面
   |- router   路由
   |- services  api
   |- utils   工具类    
```
 

 
