import './styles/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import Button from './components/Button/Button.vue'
import Collapse from './components/Collapse/Collapse.vue'
import CollapseItem from './components/Collapse/CollapseItem.vue'
const app = createApp(App)
app.component('YuuyaButton', Button)
app.component('YuuyaCollapse', Collapse)
app.component('YuuyaCollapseItem', CollapseItem)
app.mount('#app')
