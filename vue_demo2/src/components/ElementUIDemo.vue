<template>
  <div>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
//main.js 下全局引入 elementUI (1) element-ui (2)theme-chalk/index.css
export default {
  props: {},
  data() {
    return { 
      visible: false 
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style>
</style>
