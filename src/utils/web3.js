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
    const message = 'Hello, you need to sign with your wallet to log in to META BONUS platform.'
    let signature
    let address = await establishAConnection()
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
        console.log(error)
    }
}

export const establishAConnection = async () => {
    // 判断是否链接并建立连接返回钱包地址
    switchChain()
    try {
        let address = await ethereum.request({ method: 'eth_requestAccounts' }) //授权连接钱包
        return address[0]
    } catch (error) {
        console.log(error)
    }
}

export const checkBalance = async (assets) => {
    // 请求余额
    var balance = await window.web3.eth.getBalance(assets)
    return balance
}
