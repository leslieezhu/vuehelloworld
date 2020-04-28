window.onload = function(){
    var app = new Vue({  //读作，创建vue对象，并传入对象
        el: '#app',  //意义：让vue接管页面上的哪个元素，即vue绑定页面上哪个元素，术语：实例，挂载点，模板 直接的关系
        data: {
          message: 'Hello Vue!'
        }
    });
    // 定义名为 todo-item 的新组件
    Vue.component('todo-item', {
        template: '<li>这是个待办项</li>'
    })
}