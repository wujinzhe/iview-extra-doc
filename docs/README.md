# 使用

## 安装
npm 安装
推荐使用npm安装，配合webpack使用，iview-extra需要依赖于iview，在iview基础上做了进一步的封装
``` sh
# 安装
npm install iview-extra --save-dev
# 如果没有安装iview，请先安装iview
npm install iview --save-dev
```
## 使用
在vue项目的入口文件引入iview-extra(需要先引入iview 和iview的css文件)
``` js
// 需要先在代码中引入iview
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import iViewExtra from 'iview-extra'
Vue.use(iView)
Vue.use(iViewExtra)
```