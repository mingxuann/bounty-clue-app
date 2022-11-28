import axios from 'axios'
import store from '@/store/index'
import { ElMessage } from 'element-plus'
let service = axios.create({
    baseURL: 'https://bountyclue.com',
    timeout: 20000,
})
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        console.log(import.meta.env.DEV, config.url, 'import.meta.env.DEVimport.meta.env.DEV')
        config.headers['AuthAuthorize'] = store.state.persistence.walletToken || ''
        // config.url = import.meta.env.DEV
        //     ? import.meta.env.VITE_REQUEST_URL + config.url
        //     : import.meta.env.VITE_REQUEST_URL + config.url
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    async (response) => {
        let stateLogoutList = [1001, 1002, 1003, 1004, 1005]
        if (stateLogoutList.indexOf(response.data.code) !== -1) {
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
