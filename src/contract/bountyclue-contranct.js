import store from '@/store/index'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { getQueryString } from '@/utils/common.js'
import { metaMaskVerification } from '@/utils/web3.js'

export function approve() {
    // 授权 usdt
    return new Promise((resolve, reject) => {
        const bountyContract = store.state.bountyContract // 获取bountyContract合约
        const usdtContract = store.state.usdtContract // 获取USDT合约
        // const amount = window.web3.utils.toWei((100).toString(), 'ether')
        console.log(bountyContract.options.address, 'bountyContract.options.address')
        let optionsData = usdtContract.methods
            .approve(bountyContract.options.address, 100)
            .encodeABI() // 调用链上的方法
        callContractMethod(optionsData, usdtContract, 0, (res) => {
            res ? ElMessage.success('NFT Approve Success') : ElMessage.error('NFT Approve Error')
            resolve(res)
        })
    })
}
export function onBuyClueForInvestor() {
    // bountyContract 购买
    return new Promise(async (resolve, reject) => {
        const bountyContract = store.state.bountyContract // 获取bountyContract合约
        const amount = window.web3.utils.toWei((100).toString(), 'ether')
        let optionsData = bountyContract.methods.buyClueForInvestor(amount).encodeABI()
        callContractMethod(optionsData, bountyContract, 0, (res) => {
            if (res) {
                ElMessage.success('NFT Redeem Success')
            } else {
                ElMessage.error('NFT Redeem Error')
            }
            resolve(res)
        })
    })
}
async function callContractMethod(optionsData, contractExample, values = 0, callback) {
    // 调用合约上的方法
    /**
     * @param optionsData 发送方法的对象
     * @param contractExample 要操作的合约实例
     * @param values value值默认是0
     * @param callback 回调函数
     */
    // if (!(await metaMaskVerification())) return
    const account = store.state.persistence.assets // 当前钱包地址
    // if (!account) {
    //     return
    // }
    const gasPrice = await window.web3.eth.getGasPrice() // 获取gas费
    let options = {
        from: account,
        to: contractExample.options.address,
        value: values,
        data: optionsData,
        gasPrice: gasPrice,
    }
    console.log('options===============>', options)
    window.web3.eth
        .sendTransaction(options)
        .on('error', function (error) {
            console.error('error', error)
            callback && callback(false)
        })
        .then(function () {
            callback && callback(true)
        })
}
