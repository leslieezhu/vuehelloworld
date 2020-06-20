// 'use strict'
// const merge = require('webpack-merge')
// const prodEnv = require('./prod.env')

// module.exports = merge(prodEnv, {
//   NODE_ENV: '"development"'
// })
//以上是初始化项目后原生的
//此模块被 webpack.dev.conf.js 调用
module.exports = {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:62116"',
  BASE_COMPANY_API:'"http://localhost:62117"',
  // BASE_API: '"http://172.16.112.34:8088"',// 测试环境
  // GroupId: '"ADDC6F6A-1B4C-4D11-BCA1-6C2DDCB68A01"', //中智
  // GroupId: '"FB9FD860-859E-47C2-9968-BC02BA3D237B"' //徐汇
  // GroupId:'"B97F07B6-345D-4535-A824-BC61F8FF8A8F"' // 退伍军人
}