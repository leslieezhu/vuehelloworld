//传给Vuex src\store\index.js
const getters = {
  //获取基础数据城市列表
  city_item: state => state.basicData.city_item,  //理解是怎样运行的? 1).涉及 basicData.js的state属性; 2).$store.getters.city_item
  number: state => state.book.number  //默认行为:对应book.js中state属性
}
export default getters