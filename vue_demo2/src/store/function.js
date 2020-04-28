const LocalEvent = function (item) {
  this.get = function () {
      console.log("function.js")
      return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
  };
  this.set = function (obj) {
      localStorage.setItem(item, JSON.stringify(obj));
  };
  this.clear = function () {
      localStorage.removeItem(item);
  };
};

export const local = new LocalEvent('vuex_demo');