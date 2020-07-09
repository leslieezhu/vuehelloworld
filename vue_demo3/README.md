# vue_demo3

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## main.js  全局性的模块

# 全局性CSS设置
1. import 'normalize.css/normalize.css'

# 状态管理 
2. import store from './store';
2.1.  创建/src/store 目录,下面创建,modules目录 index.js  vuex 分组模式
vuex分组状态管理,三部分 index.js  modules()  getters.js
关键是掌握这3部分怎样设计, 入口/src/store/index.js  参考 Vuex API
Vuex的modules组件设计(app.js,basicData.js),里面定义 state, mutations, actions

## utils  目录下是一些全局性的工具

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
