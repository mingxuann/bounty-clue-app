<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { metaMaskVerification, establishAConnection, switchChain } from '@/utils/web3.js'
import { walletAvatarNumber } from '@/utils/utils.js'
import { copyMethod } from '@/utils/common.js'
import { userDoLong } from '@/api/index.js'
import jazzicon from 'jazzicon'
const router = useRouter()
const route = useRoute()
const store = useStore()
const state = reactive({
    switchingChainPop: false,
    walletPopup: false,
})
const assets = computed(() => store.state.persistence.assets)
const assetsShow = computed(() => store.state.persistence.assetsShow)
const assetsChina = computed(() => store.state.persistence.assetsChina)
const balanceNumber = computed(() => store.state.balanceNumber)
const routerPush = (item) => {
    router.push(item.path)
}
const onLogoClick = () => {
    router.push('/home')
}
const loginImg = ref(null)
const loginImgContant = ref(null)
onMounted(() => {
    getWalletAvatar()
})

const getWalletAvatar = () => {
    // 生成头像
    if (!assets.value) return
    var el = jazzicon(24, walletAvatarNumber(assets.value))
    var ela = jazzicon(24, walletAvatarNumber(assets.value))
    loginImgContant.value.appendChild(el)
    loginImg.value.appendChild(ela)
}
const onConnectClick = async () => {
    await establishAConnection()
    getWalletAvatar()
    const userDoLongParameter = await metaMaskVerification()
    const res = await userDoLong(userDoLongParameter)
    store.commit('stateUserToken', res.data.result.token) // 存入Token
}
const onStateLogout = async () => {
    // 退出登录
    store.commit('stateLogout')
}
const onSwitchChina = async (chinaId) => {
    // 切换链路
    await switchChain(chinaId)
}
const onOpenPop = async (popId) => {
    // 打开弹窗
    state.switchingChainPop = false
    state.walletPopup = false
    if (popId === 'switchingChainPop') state.switchingChainPop = true
    if (popId === 'walletPopup') state.walletPopup = true
}
const pushLink = (link) => {
    window.open(link, '_blank')
}
document.addEventListener('click', (e) => {
    if (state.switchingChainPop == true) state.switchingChainPop = false
    if (state.walletPopup == true) state.walletPopup = false
})
</script>

<template>
    <header class="header-box">
        <div class="header-box-content">
            <div class="logo-img-box" @click="onLogoClick">
                <img class="logo-img" src="@/assets/image/commit/logo.svg" alt="" />
                <div class="menu-box">
                    <div class="menu-item">Quests</div>
                    <div class="menu-item">Promotions</div>
                    <div class="menu-item">Governance</div>
                    <div class="menu-item">Claim</div>
                </div>
            </div>
            <div class="login-button-box">
                <button class="login-button" @click.stop="onOpenPop('switchingChainPop')">
                    <span v-if="assetsChina == 56"> BNB Chine</span>
                    <span v-else>Ethereum</span>
                    <i
                        class="iconfont icon-arrow-down-bold"
                        v-if="state.switchingChainPop == false"></i>
                    <i class="iconfont icon-arrow-up-bold" v-else></i>
                    <div class="switching-chain-pop" v-if="state.switchingChainPop">
                        <div class="switching-chain-pop-item" @click="onSwitchChina(1)">
                            <i class="iconfont icon-ethereum"></i>
                            Ethereum
                            <div
                                class="iconfont icon-check yes"
                                v-if="assetsChina == 1 || assetsChina == 5"></div>
                        </div>
                        <div class="switching-chain-pop-item" @click="onSwitchChina(56)">
                            <i class="iconfont icon-bnb"></i>
                            BNB Chine
                            <div class="iconfont icon-check yes" v-if="assetsChina == 56"></div>
                        </div>
                    </div>
                </button>
                <button class="login-button" v-if="!assets" @click="onConnectClick">
                    Connect Wallet
                </button>
                <button class="login-button" v-else @click.stop="onOpenPop('walletPopup')">
                    <div class="user-headimg" ref="loginImg"></div>
                    <span>{{ assetsShow }}</span>
                    <i class="iconfont icon-arrow-down-bold" v-if="state.walletPopup == false"></i>
                    <i class="iconfont icon-arrow-up-bold" v-else></i>
                    <div class="login-show-box" v-show="state.walletPopup">
                        <div class="user-headimg-box">
                            <div class="user-headimg-box-top">
                                <div class="user-headimg-showbox" ref="loginImgContant"></div>
                                <span class="assets-show">{{ assetsShow }}</span>
                                <div class="copy-box">
                                    <div class="copy-item" @click="copyMethod(assets)">
                                        <i class="iconfont icon-fuzhi"></i>
                                    </div>
                                    <div
                                        class="copy-item"
                                        @click="pushLink(`https://etherscan.io/address/${assets}`)">
                                        <i class="iconfont icon-fenxiang"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="eth-balance">
                                <span>{{ balanceNumber }} </span>
                                <span v-if="assetsChina == 5"> görETH</span>
                                <span v-else-if="assetsChina == 56"> BNB</span>
                                <span v-else> ETH</span>
                            </div>
                        </div>
                        <div class="login-show-item" @click="onStateLogout">
                            <span>Login Out</span>
                            <i class="iconfont icon-dengchu-box-r-xian"></i>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="less" scoped>
.header-box {
    width: 100%;
    position: absolute;
    height: 80px;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(42, 42, 47, 0.1);
    .header-box-content {
        width: 90%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo-img-box {
            width: 45px;
            height: 56px;
            display: flex;
            align-items: center;
            cursor: pointer;
            .logo-img {
                width: 45px;
                height: 56px;
                margin-right: 15px;
                margin-right: 77px;
            }
            .menu-box {
                display: flex;
                .menu-item {
                    font-size: 16px;
                    font-family: Bahnschrift;
                    font-weight: 400;
                    color: #ffffff;
                    margin-right: 38px;
                }
            }
        }
        .login-button-box {
            margin-left: auto;
            position: relative;
            display: flex;
            align-items: center;
            .login-button {
                min-width: 156px;
                padding: 0 20px;
                box-sizing: border-box;
                height: 43px;
                line-height: 43px;
                background-color: rgba(153, 161, 189, 0);
                border: 1px solid rgb(246, 221, 232);
                border-radius: 28px;
                font-size: 16px;
                color: #ffffff;
                font-weight: 600;
                text-align: center;
                cursor: pointer;
                margin-left: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                user-select: none;
                transition: 0.3s;
                &:hover {
                    background-color: rgba(153, 161, 189, 0.1);
                    border: 1px solid rgb(167, 177, 212);
                }
                &:focus {
                    box-shadow: rgb(246 221 232) 0px 0px 0px 1pt;
                }
                .icon-arrow-down-bold,
                .icon-arrow-up-bold {
                    margin-left: 14px;
                }
                .switching-chain-pop {
                    position: absolute;
                    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 15%);
                    padding: 10px;
                    box-sizing: border-box;
                    background-color: #fff;
                    border-radius: 12px;
                    top: 60px;
                    right: 0;
                    .switching-chain-pop-item {
                        width: 240px;
                        padding: 0px 8px;
                        box-sizing: border-box;
                        cursor: pointer;
                        border-radius: 12px;
                        color: rgb(13, 17, 28);
                        transition: background-color 250ms ease 0s;
                        display: flex;
                        align-items: center;
                        .iconfont {
                            font-size: 20px;
                            margin-right: 20px;
                        }
                        .yes {
                            color: rgb(76, 130, 251);
                            margin-left: auto;
                            margin-right: 6px;
                        }
                        &:hover {
                            background-color: rgb(210, 217, 238);
                        }
                    }
                }
                .user-headimg {
                    width: 24px;
                    height: 24px;
                    position: relative;
                    margin-right: 14px;
                }
                :deep(.user-headimg > div) {
                    display: block !important;
                }
                .login-show-box {
                    width: 320px;
                    position: absolute;
                    top: 60px;
                    right: 0px;
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    font-size: 16px;
                    background-color: rgb(255, 255, 255);
                    border: 1px solid rgb(210, 217, 238);
                    box-shadow: rgb(51 53 72 / 4%) 8px 12px 20px, rgb(51 53 72 / 2%) 4px 6px 12px,
                        rgb(51 53 72 / 4%) 4px 4px 8px;
                    padding: 16px 10px;
                    box-sizing: border-box;
                    color: rgb(13, 17, 28);
                    cursor: auto;
                    .user-headimg-box {
                        padding: 0px 16px;
                        box-sizing: border-box;
                        border-bottom: 1px solid rgb(210, 217, 238);
                        .user-headimg-box-top {
                            display: flex;
                            align-items: center;
                            .user-headimg-showbox {
                                width: 24px;
                                height: 24px;
                                position: relative;
                                margin-right: 14px;
                            }
                            .assets-show {
                                font-size: 16px;
                            }
                            .copy-box {
                                margin-left: auto;
                                display: flex;
                                .copy-item {
                                    width: 32px;
                                    height: 32px;
                                    background-color: rgb(232, 236, 251);
                                    border-radius: 12px;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    transition: 0.3s;
                                    cursor: pointer;
                                    margin-left: 8px;
                                    .iconfont {
                                        font-size: 15px;
                                        color: #0e111c;
                                    }
                                    &:hover {
                                        background-color: rgba(232, 236, 251, 0.7);
                                    }
                                }
                            }
                        }
                        .eth-balance {
                            font-size: 36px;
                            font-weight: 400;
                            margin: 16px 0;
                            margin-bottom: 22px;
                        }
                    }
                    :deep(.user-headimg-showbox > div) {
                        display: block !important;
                    }
                    .login-show-item {
                        padding: 3px 8px;
                        box-sizing: border-box;
                        font-size: 14px;
                        font-weight: 400;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-radius: 12px;
                        transition: 0.3s;
                        margin-top: 10px;
                        cursor: pointer;
                        &:hover {
                            color: rgb(13, 17, 28);
                            background-color: rgb(245, 246, 252);
                        }
                    }
                }
            }
        }
    }
}
</style>
