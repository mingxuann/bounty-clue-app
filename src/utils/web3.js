import store from '@/store/index'
import Web3 from 'web3'
// import { ElMessage } from 'element-plus'

export const web3Init = () => {
    // web3初始化
    let web3 = window.web3
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(window.ethereum)
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com'))
    }
    console.log('web3 init', window.web3)
    window.web3 = web3 // web3链接
}
export const switchChain = async () => {
    // 切换网络
    let hexChainId = window.web3.utils.toHex(import.meta.env.VITE_CHAIN === 'ethereum' ? 1 : 5)
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: hexChainId }],
    })
}
export const metaMaskVerification = async () => {
    // 请求钱包签名
    let signature
    let address = await establishAConnection()
    console.log(store.state.walletToken)
    if (store.state.walletToken) return
    var encode = encodeURI(address + new Date().getTime())
    // 对编码的字符串转化base64
    var base64 = btoa(encode)
    const message = `Welcome to the BOUNTYCLUE Questboard, please sign this message to verify your identity. Your custom message is: ${base64}`
    try {
        signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [address, message],
        })
        return {
            address,
            message,
            signature,
        }
    } catch (error) {
        return false
    }
}

export const establishAConnection = async () => {
    // 判断是否链接并建立连接返回钱包地址
    switchChain()
    try {
        let address = await ethereum.request({ method: 'eth_requestAccounts' }) //授权连接钱包
        store.commit('setAssets', address[0]) // 存入钱包
        return address[0]
    } catch (error) {
        return false
    }
}

export const checkBalance = async (assets) => {
    // 请求余额
    var balance = await window.web3.eth.getBalance(assets)
    return balance
}
