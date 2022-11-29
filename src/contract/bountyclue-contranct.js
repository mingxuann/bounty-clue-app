import store from '@/store/index'
import router from '@/router/index'
import { ElMessage } from 'element-plus'
import { getQueryString } from '@/utils/common.js'
import { establishAConnection } from '@/utils/web3.js'
// export function approve(authorizedAmount) {
//     // 授权 usdt
//     return new Promise((resolve, reject) => {
//         const bountyContract = store.state.bountyContract // 获取bountyContract合约
//         const usdtContract = store.state.usdtContract // 获取USDT合约
//         const amount = authorizedAmount * 1000000
//         console.log(amount, 'svamountamount')
//         let optionsData = usdtContract.methods
//             .approve(bountyContract.options.address, amount)
//             .encodeABI() // 调用链上的方法
//         callContractMethod(optionsData, usdtContract, 0, (res) => {
//             res ? ElMessage.success('USDT Approve Success') : ElMessage.error('USDT Approve Error')
//             resolve(res)
//         })
//     })
// }

export function approve(authorizedAmount) {
    // 授权 usdt
    return new Promise((resolve, reject) => {
        const bountyContract = store.state.bountyContract // 获取bountyContract合约
        const usdtContract = store.state.usdtContract // 获取USDT合约
        const amount = authorizedAmount * 1000000
        let optionsData = usdtContract.methods
            .approve(bountyContract.options.address, amount)
            .encodeABI() // 调用链上的方法
        callContractMethod(optionsData, usdtContract, 0, (res) => {
            res ? ElMessage.success('USDT Approve Success') : ElMessage.error('USDT Approve Error')
            resolve(res)
        })
    })
}
export function onBuyClueForInvestor(authorizedAmount) {
    // bountyContract 购买
    return new Promise(async (resolve, reject) => {
        const bountyContract = store.state.bountyContract // 获取bountyContract合约
        const amount = authorizedAmount * 1000000
        let optionsData = bountyContract.methods.buyClueForInvestor(amount).encodeABI()
        callContractMethod(optionsData, bountyContract, 0, (res) => {
            if (res) {
                ElMessage.success('Purchase succeeded')
            } else {
                ElMessage.error('Purchase Error')
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
    console.log(5, optionsData)
    if (!(await establishAConnection())) return
    const account = store.state.persistence.assets // 当前钱包地址
    const gasPrice = await window.web3.eth.getGasPrice() // 获取gas费
    console.log(6, optionsData)
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
