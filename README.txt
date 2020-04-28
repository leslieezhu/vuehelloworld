<slot></slot>定义在插件模板中,作用:按照官方文档的说法,

具名插槽
https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD

<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
为什么父级作用域使用这样的语法:现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字

vuex中mapState、mapMutations、mapAction的理解
https://blog.csdn.net/wangguoyu1996/article/details/80573113

module.loaders：是文件的加载器，比如我们之前react需要在页面中引入jsx的js源码到页面上来，然后使用该语法，但是通过webpack打包后就不需要再引入JSXTransformer.js；看到上面的加载器；比如jsx-loader加载器就是代表JSXTransformer.js的，还有style-loader和css-loader加载器；因此在使用之前我们需要通过命令把它引入到项目上来；因此需要如下命令生成下；

jsx-loader加载器 npm install jsx-loader --save-dev
Style-loader加载器 npm install style-loader --save-dev
css-loader 加载器 npm install css-loader --save-dev
局部安装webpack 执行命令：npm install webpack --save-dev
gulp的全局安装和在项目中局部安装也安装下
	Gulp全局安装 npm install -g gulp
	gulp局部安装 使用命令 npm install gulp --save-dev

执行命令webpack, 运行webpack,(在项目根目录下执行)

========
Git 操作备忘
$git commit `//不带任何release说明的commit动作 
$git push origin dev 
$git push origin master //最后一步,将dev的代码推送到远程仓库,leslieezhu@qq.com  名字+数字

学习资料
https://github.com/chrisvfritz/vue-2.0-simple-routing-example/tree/pagejs