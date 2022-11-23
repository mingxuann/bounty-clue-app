import service from '@/utils/request.js'
import { objToUrl } from '@/utils/common.js'

// discord登录
export const discordOauthToken = (data) => {
    return service({
        url: `/bounty-clue/discord/oauth/token?code=${data}`,
        method: 'get',
    })
}
// 用户签名
export const userDoLong = (data) => {
    return service({
        url: `/bounty-clue/user/doLong`,
        method: 'post',
        data,
    })
}
