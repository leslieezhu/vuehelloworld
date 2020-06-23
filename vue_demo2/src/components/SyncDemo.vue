<template>
  <div class="details">
    <myComponent :show.sync='valueChild' style="padding: 30px 20px 30px 5px;border:1px solid #ddd;margin-bottom: 10px;">
    </myComponent>
    <button @click="changeValue">toggle</button>
  </div>
</template>
<script>
//组件属性(show)的改变,同步到父组件的data,父组件的data值的改变也可以同步到子组件的属性,即父组件与子组件属性值之间的通信
import Vue from "vue";
Vue.component("myComponent", {
  template: `<div v-if="show">
                <p>默认初始值是{{show}}，所以是显示的</p>
                <button @click.stop="closeDiv">关闭</button>
              </div>`,
  props: ["show"],
  methods: {
    closeDiv() {
      this.$emit("update:show", false); //效果是将子组件的事件发布出去,这里将closeDiv事件发布, 更新组件内部属性show,并传入新值"false"
    }
  }
});
export default {
  data() {
    return {
      valueChild: true
    };
  },
  methods: {
    changeValue() {
      this.valueChild = !this.valueChild;
    }
  }
};
</script>