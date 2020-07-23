const STORAGE_KEY = 'mall';
export default {
    // key: mall      value: {"user":{"userName":"yian","age":22,"sex":1}}
    // 存储值  module_name为模块对象，即user
    setItem(key, value, module_name) {
        if(module_name){
            // 获取user对象
            let val=this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    // 取某一个模块下的属性 (user下面的userName)
    getItem(key, module_name) {
        if (module_name) {
            // 返回一个Object对象
            let val = this.getItem(module_name);
            if (val) return val[key];
        }
        return this.getStorage()[key];
    },
    // 获取整个数据
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    // 清空某一个值
    clearItem(key,module_name) {
        let val=this.getStorage();
        if(module_name){
            if(!val[module_name]) return;
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        // 删除后将值重新写入
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}