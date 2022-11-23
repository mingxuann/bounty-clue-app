const persistence = {
    state: () => ({
        assets: false, // 钱包地址
        assetsShow: '', // 钱包展示
        walletToken: false, // 钱包地址token
        walletType: 'MetaMask',
    }),
    mutations: {
        stateWalletToken(state, data) {
            state.walletToken = data
        },
        setAssets(state, assets) {
            state.assets = assets
            state.assetsShow = `${assets.slice(0, 2)}...${assets.slice(
                assets.length - 4,
                assets.length
            )}`
        },
        setWalletType(state, data) {
            state.walletType = data
        },
        stateLogout(state) {
            state.assets = false
            state.assetsShow = ''
            state.walletToken = ''
        },
    },
}
export default persistence
