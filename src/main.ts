import './styles/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import Button from './components/Button/Button.vue'
const app = createApp(App)
app.component('YuuyaButton', Button)
app.mount('#app')
