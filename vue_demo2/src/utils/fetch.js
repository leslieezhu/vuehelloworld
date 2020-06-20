import axios from 'axios';

//import store from '../store'
import app from '../main'  //将main.js的 Vue对象 export,为了使用它的一些原生方法
//获取本地缓存token
// if (JSON.parse(localStorage.getExpire('userInfo'))) {
//   //header add token
//   axios.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getExpire('userInfo')).token;
// }

// axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';
// axios.defaults.timeout = 5000;

// 创建axios实例
const service = axios.create({   // 通过这个例子知道, process 应该是NodeJS或Webpack原生API,见(webpack.dev.conf.js), 涉及知识点:config\dev.env.js
  baseURL: process.env.BASE_API, // 关键点: process.env.BASE_API是在哪里设置的? 不设置时,默认就是http://localhost:xxx,它会和fetch.post的第1个参数相拼接
  timeout: 10000, // 请求超时时间
  // withCredentials:true  //表示request携带cookie
});



// request interceptor axios请求前置拦截器器实践
service.interceptors.request.use(
  config => {
    if (config.url) {
      // debugger
      if (!config.url.split("/").some((t) => {
          return t == "BasicData"
        })) {
        app.$loading.show();  //app是vue对象, 参考:main.js  理解app.$loading在哪里定义? 
      }
    }else{
      app.$loading.show();
    }
    if (config.data) {  //这里对应position.js fetch.post的第2个参数
      config.data["GroupId"] = process.env.GroupId;
    }
    if (config.method == "get") {
      if (config.params) {
        config.params["GroupId"] = process.env.GroupId;

      }
    }
    let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJhNWRiNThiMy1lN2NjLTRmMzQtOGUwMC1mYmEyZDkyMmM0M2IiLCJNb2JpbGUiOiIxNzAxMTk2MDMyMSIsIm5iZiI6MTU4ODk4ODY4OSwiZXhwIjoxNjc1Mzg4Njg5LCJpc3MiOiJ0Y3AiLCJhdWQiOiJ0Y3AtYXBpIn0.W1456blYU-jBbj16hPpw10dQ6r0ZCBoS8AbalY5CI50"
    // if (store.getters.token) {
    //   config.headers['Authorization'] = store.getters.token
    // }
    //Vuex相关知识点
    /**
    if (localStorage.getExpire('Token')) {
      config.headers['Authorization'] = localStorage.getExpire('Token')
    } 
    */
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)



// respone拦截器
service.interceptors.response.use(
  response => {
    app.$loading.hide();
    if (response.data.Data) {
      // store.dispatch('FedLogOut').then(() => {
      //   next({ path: '/login' })
      // })
    }
    return response
  },
  error => {
    // vue.$Message.error({
    //   message: error.message,
    //   duration: 5 * 1000,
    //   closable: true
    // });
    return Promise.reject(error);
  }
)
//这里export 给position.js 调用
export default service;
