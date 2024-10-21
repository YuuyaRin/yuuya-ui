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
import Icon from './components/Icon/Icon.vue'
import Intro from './components/Intro/Intro.vue'
import IntroMask from './components/Intro/mask.vue'
import Alert from './components/Alert/Alert.vue'
const app = createApp(App)
app.component('YuuyaButton', Button)
app.component('YuuyaCollapse', Collapse)
app.component('YuuyaCollapseItem', CollapseItem)
app.component('YuuyaIcon', Icon)
app.component('YuuyaIntro', Intro)
app.component('YuuyaIntroMask', IntroMask)
app.component('YuuyaAlert', Alert)
app.mount('#app')
