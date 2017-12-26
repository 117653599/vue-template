# ifish(前端脚手架)

> ifish前端脚手架

## 运行命令


``` bash
#克隆代码
git clone [代码仓库地址] your-project

#进入项目
cd your-project

# 添加依赖
npm install
# 或者
yarn install

# 本地服务 localhost:8081
npm run dev

# 打包发布 for mac
npm run build

```
# 项目结构说明

``` bash
.
|-- build                            // webpack打包编译目录
|   |-- build.js                     // 项目打包入口文件
|   |-- check-versions.js            // 检查node和npm版本是否符合
|   |-- dev-client.js                // 页面自动刷新
|   |-- dev-server.js                // 启动热加载代理服务器
|   |-- utils.js                     // css和style的loader定义
|   |-- webpack.base.conf.js         // 公共打包文件
|   |-- webpack.dev.conf.js          // 本地开发打包文件
|   |-- webpack.prod.conf.js         // 线上环境打包文件
|-- config                           // 项目开发环境配置目录
|   |-- index.js                     // 定义各种环境变量
|-- src                              // 源码目录
|   |-- assets                       // 公共资源目录
|   |-- components                   // 公共组件目录
|   |-- pages                        // 页面组件目录
|       |-- index.vue                // 网站首页
|   |-- router                       // 路由配置目录
|       |-- index.js                 // 加载各个router模块
|   |-- service                      // ajax异步请求接口目录
|       |-- index.js                 // 加载各个ajax异步请求
|   |-- store                        // vuex的状态管理目录
|       |-- index.js                 // 加载各种store模块
|   |-- util                         // 工具目录
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|   |-- App.vue                      // 个人主页页面
|   |-- filters.js                   // 过滤器注册
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 编辑器配置
|-- .eslintignore                    // eslint忽略配置
|-- .eslintrc.js                     // eslint规则配置
|-- .gitattributes                   // git文件类型配置
|-- .gitignore                       // git忽略配置
|-- favicon.ico                      // 网站ico
|-- index.html                       // 首页模板
|-- package.json                     // 项目配置文件
|-- README.md                        // 项目说明文件


```
# 项目说明
1.使用vue框架

2.iview组件

3.vue-router

4.vuex

5.本地开发环境 node

# 参考文档

- Vue2.0中文文档：[https://cn.vuejs.org/v2/guide/](https://cn.vuejs.org/v2/guide/)

- Vue-Router中文文档：[https://router.vuejs.org/zh-cn/](https://router.vuejs.org/zh-cn/)

- iView组件文档: [https://www.iviewui.com/docs/guide/install]

