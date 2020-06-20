import * as type from './mutations_types.js';
import * as func from './function';
export default {
  //使用箭头函数实现set功能,传入state和对应的value, 这里为 searchPositionHistory 对象
  //暂时理解为:ES可以根据 const 所定义的常量调用对应的方法,至于这样的原因,待研究
  [type.SEARCHPOSITIONHISTORY](states, searchPositionHistory) {
    debugger
    states.searchPositionHistory = searchPositionHistory;
    func.local.set(states); //func.local.set是原生方法
  },
  //等价写法
  /** 
  SEARCHPOSITIONHISTORY:(states, searchPositionHistory)=>{
    debugger
    states.searchPositionHistory = searchPositionHistory;
    func.local.set(states);
  }
  */
}