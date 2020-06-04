import * as type from './mutations_types.js';
import * as func from './function';
export default {
  //使用箭头函数实现set功能,传入state和对应的value, 这里为 searchPositionHistory 对象
  [type.SEARCHPOSITIONHISTORY](states, searchPositionHistory) {
    debugger
    states.searchPositionHistory = searchPositionHistory;
    func.local.set(states); //local是什么?
  }
}

