import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'
import Vant from 'vant'
import VChart from 'vue-echarts'
import 'vant/lib/index.css'
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(Vant)
app.use(pinia)
app.component('v-chart', VChart)
app.mount('#app')