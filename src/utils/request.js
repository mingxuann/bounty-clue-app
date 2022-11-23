import axios from 'axios'
import store from '@/store/index'
import { ElMessage } from 'element-plus'
let service = axios.create({
    baseURL: '',
    timeout: 20000,
})
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        config.headers['AuthAuthorize'] = store.state.persistence.walletToken || ''
        config.url = import.meta.env.DEV
            ? config.url
            : import.meta.env.VITE_REQUEST_URL + config.url
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    async (response) => {
        if (response.data.code !== 200) {
            store.commit('stateLogout')
            ElMessage({
                dangerouslyUseHTMLString: true,
                message: `<span>${response.data.desc}</span>`,
                center: true,
            })
        }
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
