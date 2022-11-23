// 结构请求参数
export const objToUrl = (obj) => {
    const tempArray = []
    for (const item in obj) {
        if (item) {
            tempArray.push(`${item}=${obj[item]}`)
        }
    }
    return `?${tempArray.join('&')}`
}
// 获取某一个参数值
export function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}
// 复制方法
export const copyMethod = (texts) => {
    var oInput = document.createElement('input') //创建一个input
    oInput.setAttribute('readonly', 'readonly') //设置只读，否则移动端使用复制功能时可能会造成软件盘弹出
    oInput.value = texts
    document.body.appendChild(oInput) //将input插入到body
    oInput.select() // 选择对象
    document.execCommand('Copy') // 执行浏览器复制命令
    oInput.style.display = 'none' // 将input隐藏
    oInput.remove() // 将input销毁
}
