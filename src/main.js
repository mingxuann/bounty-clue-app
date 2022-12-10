import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { web3Init, getChain } from '@/utils/web3.js'
import { processingUrlParameters } from '@/utils/utils.js'
web3Init() // web3初始化
processingUrlParameters()
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
