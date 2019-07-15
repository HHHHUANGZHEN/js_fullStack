devDependencies 开发阶段
Dependencies  所有阶段
webpack 打包工具 构建应用

打包之前 development
打包之后 build -> dist/ 不再需要webpack 部署到服务器

- webpack-dev-server
  webpack打包好之后，将打包后的内容，在浏览器中8080端口启动，是前端开发的标准
  在一个端口打开web server
  实时编译  watch HMR

网页webpack打包过程：
  index.js 是入口，打包成为main.js
  index.html是首页的模板， main.js会由webpack-dev-server自动放在index.html的最后面 script引入