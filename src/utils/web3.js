import store from '@/store/index'
import Web3 from 'web3'
import { ElMessage } from 'element-plus'
export const web3Init = () => {
    // web3初始化
    let web3 = window.web3
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(window.ethereum)
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider('https://polygon-rpc.com'))
    }
    window.web3 = web3
    getChain()
    checkBalance()
}
export const getChain = async () => {
    // 获取当前链id
    const res = await ethereum.request({ method: 'eth_chainId' })
    const chinaId = web3.utils.BN(res).toString()
    store.commit('setAssetsChina', chinaId)
    return chinaId
}
export const switchChain = async (chain) => {
    // 切换网络
    let hexChainId = window.web3.utils.toHex(chain)
    await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: hexChainId }],
    })
    checkBalance()
    store.commit('setAssetsChina', chain)
}
export const checkBalance = async () => {
    // 请求余额
    if (!store.state.persistence.assets) return
    var balance = await window.web3.eth.getBalance(store.state.persistence.assets)
    store.commit('setBalanceNumber', balance)
    return balance
}
export const metaMaskVerification = async () => {
    // 请求钱包签名
    let signature
    let address = store.state.persistence.assets
    if (!address) return false
    if (store.state.persistence.walletToken) return
    var encode = encodeURI(address + new Date().getTime())
    // 对编码的字符串转化base64
    var base64 = btoa(encode)
    const message = `Welcome to the BOUNTYCLUE Questboard, please sign this message to verify your identity. Your custom message is: ${base64}`
    try {
        signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [address, message],
        })
        store.commit('stateWalletToken', signature) // 存入钱包签名
        return {
            address,
            message,
            signature,
        }
    } catch (error) {
        ElMessage({
            grouping: true,
            message: 'User rejected request',
            type: 'error',
        })
        return false
    }
}
export const establishAConnection = async () => {
    // 判断是否链接并建立连接返回钱包地址
    try {
        let address = await ethereum.request({ method: 'eth_requestAccounts' }) //授权连接钱包
        store.commit('setAssets', address[0]) // 存入钱包
        return address[0]
    } catch (error) {
        ElMessage({
            grouping: true,
            message: "You don't Have a MetaMask Wallet yet.",
            type: 'error',
        })
        return false
    }
}
