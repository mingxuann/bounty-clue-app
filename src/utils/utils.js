import { getQueryString } from '@/utils/common.js'
import { discordOauthToken } from '@/api/index.js'
export const setScrollbarWidth = () => {
    // 获取滚动条宽度
    const container = document.createElement('div')
    document.body.appendChild(container)
    container.style.overflow = 'scroll'
    const inner = document.createElement('div')
    container.appendChild(inner)
    const width = container.offsetWidth - inner.offsetWidth
    document.body.removeChild(container)
    document.documentElement.style.setProperty('--scrollbar', `${width}px`)
}
export function monitorSize() {
    // DOM树加载完执行
    window.addEventListener('DOMContentLoaded', function () {
        setScrollbarWidth()
    })
    // 屏幕变化监听
    window.addEventListener('resize', function () {
        setScrollbarWidth()
    })
}
export const processingUrlParameters = async () => {
    // 处理参数
    if (getQueryString('code')) {
        await discordOauthToken(getQueryString('code'))
    }
    // store.state.discordCode = getQueryString('code')
    // localStorage.setItem('discordCode', getQueryString('code'))
}
