import iView from 'iview'
import 'iview/dist/styles/iview.css'

import iViewExtra from 'iview-extra'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router  // 当前应用的路由实例
}) => {
  Vue.use(iView)
  Vue.use(iViewExtra)
  // ...做一些其他的应用级别的优化
}