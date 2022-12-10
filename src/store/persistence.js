const persistence = {
    state: () => ({
        assets: false, // 钱包地址
        assetsShow: '', // 钱包展示
        assetsChina: 1, // 钱包链路
        walletToken: false, // 钱包地址token
        userToken: false, // 刘飞token
    }),
    mutations: {
        setAssets(state, assets) {
            state.assets = assets
            state.assetsShow = `${assets.slice(0, 2)}...${assets.slice(
                assets.length - 4,
                assets.length
            )}`
        },
        setAssetsChina(state, data) {
            state.assetsChina = data
        },
        stateWalletToken(state, data) {
            state.walletToken = data
        },
        stateUserToken(state, data) {
            state.userToken = data
        },
        stateLogout(state) {
            state.assets = false
            state.assetsShow = ''
            state.assetsChina = 0
            state.walletToken = ''
            state.userToken = ''
        },
    },
}
export default persistence
