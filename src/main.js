import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Toast } from 'vant'
import 'vant/lib/index.css';
const app = createApp(App)
 
app
.use(router)
.use(Toast)

app.mount('#app')
