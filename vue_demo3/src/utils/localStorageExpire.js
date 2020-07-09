//Vuex使用Web Storeage API 进行数据存储, 所以要知道Storage 官网API 在哪里,为什么有这个API
//在main.js 中引入
Storage.prototype.setExpire = (key, value, expire=24 ) => {
	let obj = {
	data: value,
	time: Date.now(),
	expire: expire * 1000*60*60
	};
	//localStorage 设置的值不能为对象,转为json字符串
	localStorage.setItem(key, JSON.stringify(obj));
}

Storage.prototype.getExpire = key => {
    //debugger
    let val = localStorage.getItem(key);
    if (!val) {
        return val;
    }
    val = JSON.parse(val);
    if (Date.now() - val.time > val.expire) {
        localStorage.removeItem(key);
        return null;
    }
    return val.data;
}