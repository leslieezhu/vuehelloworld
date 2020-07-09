//此处使用Web Storeage API 进行数据存储, 参考 src\utils\localStorageExpire.js
const basicData = {
  state: {
    //从HTML5的localStorage中取值, localStorage 属于 HTML5 JS API 而 getExpire是自定义扩展函数参考localStroageExpire.js
    city_item: localStorage.getExpire("CityList") ? JSON.parse(localStorage.getExpire("CityList")) : [] //这种设计待理解
  },
  mutations:{
    SET_CITYITEM : (state,cityItems) =>{ //必须2个函数, 理解state参数的作用? state就是第3行属性所引用的值,这些都是约定行为
      // console.log("mutations")
      // console.info(state)
      // console.info(cityItems)
      localStorage.setExpire("CityList", JSON.stringify(cityItems));//自定义封装Storeage,set,get 方法
    },
    GET_CITY_ITEM: (state, CityItem) => {
      state.city_item = CityItem;
    },
  },
  actions:{
    setCityItem:({
      commit
    },cityItems) => {
      // console.log("action:setCityItem")
      // console.info(cityItems)
      return commit('SET_CITYITEM',cityItems) //会到mutations属性中调用SET_CITYITEM方法, 所以coding 对应的 SET_CITYITEM 函数,将数据存到localStorage中,SET_CITYITEM函数必须有设计2个参数
    },
    getCityItem:({commit}) => {
      //localStorage 是 Storage 属于HTML 5 知识范畴
      if(localStorage.getExpire('CityList')) {
        commit('GET_CITY_ITEM', JSON.parse(localStorage.getExpire("CityList")))
      }
    }
  }
}

export default basicData