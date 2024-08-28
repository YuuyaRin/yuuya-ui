import './styles/index.css'
import { createApp } from 'vue'

// 使用fontawesome添加图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import App from './App.vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
const app = createApp(App)
app.component('YuuyaButton', Button)
app.component('YuuyaCollapse', Collapse)
app.component('YuuyaCollapseItem', CollapseItem)
app.mount('#app')
