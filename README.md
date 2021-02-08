# ys
第一步
在根目录创建一个.env.test文件test名字可以自定义，在里面写入
NODE_ENV='test'

第二步
在package.json文件中scripts字段中加入"test": “vue-cli-service build --mode test”

"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "test": "vue-cli-service build --mode test",
    "lint": "vue-cli-service lint"
  },

第三步
在你设置baseUrl的地方，比如：

var baseURL = '';
switch (process.env.NODE_ENV) {
    case 'development'://开发环境
        baseURL = 'http://192.168.31.151:30000'
        break
    case 'test'://测试环境
        baseURL = 'http://chunjiang.f3322.net:19999'
        break
    case 'production'://生产环境
        baseURL = 'http://chunjiang.f3322.net:9999'
        break
}
axios.defaults.baseURL = baseURL;//设置axios默认地址


https://blog.csdn.net/qq_32971359/article/details/106927807
over
