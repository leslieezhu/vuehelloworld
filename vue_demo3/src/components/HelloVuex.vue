<template>
  <div>HelloVuex
    <button @click="ClickSetHandler">Vuex SET</button>
    <button @click="ClickGetHandler">Vuex GET</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityItems: ["上海", "北京", "广州", "深圳"]
    };
  },
  methods: {
    ClickSetHandler() {
      //实践Vuex之将值保存到localStorage中
      console.log("mounted");
      this.$store.dispatch("setCityItem", this.cityItems); //到basicData.js中actions属性coding setCityItem
    },
    ClickGetHandler() {
      //实践,获取Vuex之前保存在localStorage的相应的值
      this.$store.dispatch("getCityItem");
      let cityitem = this.$store.getters.city_item;//理解$store.getters的默认行为
      console.info(cityitem);
    }
  }
};
</script>


