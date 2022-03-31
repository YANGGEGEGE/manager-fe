import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import axios from 'axios'
import request from './utils/request'

const app = createApp(App)

//往全局app挂载一个对象  $是vue里面的一种命名方式
app.config.globalProperties.$request = request
app.use(router).use(ElementPlus).mount('#app')
