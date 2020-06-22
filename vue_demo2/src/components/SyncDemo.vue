<template>
  <div class="details">
    <myComponent :show.sync='valueChild' style="padding: 30px 20px 30px 5px;border:1px solid #ddd;margin-bottom: 10px;">
    </myComponent>
    <button @click="changeValue">toggle</button>
  </div>
</template>
<script>
//vue 修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定。
//说白了他就是子组件改变父组件data的一种方法
import Vue from "vue";
Vue.component("myComponent", {
  template: `<div v-if="show">
                <p>默认初始值是{{show}}，所以是显示的</p>
                <button @click.stop="closeDiv">关闭</button>
              </div>`,
  props: ["show"],
  methods: {
    closeDiv() {
      this.$emit("update:show", false); //触发 input 事件，并传入新值
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