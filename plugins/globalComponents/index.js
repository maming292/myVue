/**
 * 全局组件使用方法
 */
// var components = {
//     'BlogFooter': 'BlogFooter.vue',
//     'BlogHeader': 'common/BlogHeader.vue',
//     'BlogBody': 'BlogBody.vue',
// };

// for (let key in components) {//批量引入自定义的组件
//     let val = components[key];
//     Vue.component(key, (require('../src/components/' + val)).default);
// }
 //1.路径必须拿出来,存放的组件文件都应该是同一目录中
 //2.require方法不允许只有变量，并且对应的路径必须是能指向的路径加文件，不能用@来代替项目的根路径

/**
 * 单个组件使用方法
 */
//  import MyLoad from '@/components/MyLoad.vue';
// Vue.component('MyLoad',MyLoad);