/**
 * 配置过滤器
 */
var filters = {
    dateDay: function (timestamp) {
        return parseInt(Date.parse(new Date()) / 1000); //当前时间戳
    }
}

/**
 *
 * 使用
 */
//  Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
//  });