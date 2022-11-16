import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import index from './index'
import './router/index'
import router from "@/router";
import  * as Icons from '@element-plus/icons-vue'
const app = createApp(App)
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key])
})

app.use(ElementPlus)
app.use(router)
app.mount('#app')
app.component('index',index)
