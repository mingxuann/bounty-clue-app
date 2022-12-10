import { getQueryString } from '@/utils/common.js'
import { discordOauthToken } from '@/api/index.js'
export function walletAvatarNumber(assets) {
    // 16进制转10进制生成头像
    return parseInt(assets.slice(assets.length - 8, assets.length), 16)
}
export const processingUrlParameters = async () => {
    // 处理参数
    if (getQueryString('code')) {
        await discordOauthToken(getQueryString('code'))
    }
    // store.state.discordCode = getQueryString('code')
    // localStorage.setItem('discordCode', getQueryString('code'))
}
