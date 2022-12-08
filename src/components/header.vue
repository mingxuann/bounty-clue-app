<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { metaMaskVerification } from '@/utils/web3.js'
import { userDoLong } from '@/api/index.js'
import jazzicon from 'jazzicon'

const router = useRouter()
const route = useRoute()
const store = useStore()
const state = reactive({
    menuListItem: '/home',
    walletPopup: false,
})
const assets = computed(() => store.state.persistence.assets)
const assetsShow = computed(() => store.state.persistence.assetsShow)
const routerPush = (item) => {
    state.menuListItem = item.path
    router.push(item.path)
}
const onLogoClick = () => {
    router.push('/home')
}

onMounted(() => {
    // var body = document.querySelector('#loginImg')
    // var el = jazzicon(20, 52906)
    // body.appendChild(el)
})
const onConnectClick = async () => {
    const userDoLongParameter = await metaMaskVerification()
    const res = await userDoLong(userDoLongParameter)
    store.commit('stateWalletToken', res.data.result.token) // 存入Token
}
const onStateLogout = async () => {
    store.commit('stateLogout')
}
document.addEventListener('click', (e) => {
    if (state.walletPopup == true) state.walletPopup = false
})
</script>

<template>
    <header class="header-box">
        <div class="header-box-content">
            <div class="logo-img-box" @click="onLogoClick">
                <img class="logo-img" src="@/assets/image/logo.png" alt="" />
                <div class="logo">BOUNYCLUE</div>
            </div>
            <div class="login-button-box">
                <div class="docs">Community</div>
                <div class="docs">Docs</div>
                <div class="login-button">Ethereum</div>
                <div class="login-button" v-if="!assets" @click="onConnectClick">
                    Connect Wallet
                </div>
                <div class="login-button" v-else @click.stop="state.walletPopup = true">
                    <!-- <div id="loginImg"></div> -->
                    <span>{{ assetsShow }}</span>
                    <div class="login-show-box" v-if="state.walletPopup">
                        <div class="login-show-item" @click="onStateLogout">Login Out</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="less" scoped>
.header-box {
    width: 100%;
    position: relative;
    height: 100px;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 2;
    border-bottom: 1px solid #999;
    background-color: rgb(42, 42, 47);
    .header-box-content {
        width: 1700px;
        height: 100%;
        display: flex;
        align-items: center;
        .logo-img-box {
            display: flex;
            align-items: center;
            cursor: pointer;
            .logo-img {
                width: 49px;
                height: 49px;
                margin-right: 15px;
            }
            .logo {
                font-size: 30px;
                font-weight: 400;
                color: #fff;
                font-weight: 600;
                position: relative;
                top: 3px;
            }
        }
        .login-button-box {
            margin-left: auto;
            position: relative;
            display: flex;
            align-items: center;
            .docs {
                font-size: 23px;
                font-weight: 400;
                color: #f7f9f7;
                margin-right: 38px;
            }
            .login-button {
                width: 209px;
                height: 50px;
                background: #f7f6f6;
                border: 1px solid #37388e;
                border-radius: 40px;
                font-size: 22px;
                font-weight: 600;
                color: #010101;
                line-height: 50px;
                text-align: center;
                cursor: pointer;
                margin-left: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                #loginImg {
                    width: 40px;
                    height: 40px;
                    margin-right: 12px;
                }
                .login-show-box {
                    position: absolute;
                    right: 0px;
                    border-radius: 12px;
                    width: 320px;
                    display: flex;
                    flex-direction: column;
                    font-size: 16px;
                    top: 60px;
                    background-color: rgb(255, 255, 255);
                    border: 1px solid rgb(210, 217, 238);
                    box-shadow: rgb(51 53 72 / 4%) 8px 12px 20px, rgb(51 53 72 / 2%) 4px 6px 12px,
                        rgb(51 53 72 / 4%) 4px 4px 8px;
                    padding: 16px 0px;
                    .login-show-item {
                        height: 60px;
                        line-height: 60px;
                        text-align: center;
                    }
                }
            }
            .wallet-details {
                width: 420px;
                background-color: rgba(255, 255, 255, 0.7);
                border-radius: 10px;
                position: absolute;
                top: 70px;
                right: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                padding: 40px 20px;
                box-sizing: border-box;
                .wallet-details-matemake {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin: 26px 0;
                    padding: 16px 30px;
                    box-sizing: border-box;
                    .mate-logo {
                        width: 50px;
                    }
                    .metamask-text {
                        font-size: 26px;
                        color: #333;
                        margin-left: 40px;
                    }
                    .icon-roundcheckfill {
                        font-size: 36px;
                        color: #30c87c;
                        margin-left: 80px;
                    }
                    .icon-dengchu-box-r-xian {
                        width: 50px;
                        text-align: center;
                        font-size: 36px;
                        color: #333;
                    }
                }
                .matemake-show {
                    background-color: rgb(195, 195, 195);
                    border-radius: 14px;
                }
                .log-out {
                    cursor: pointer;
                    transition: 0.3s;
                    &:hover {
                        color: #7b35e0;
                    }
                }
            }
        }
    }
}
</style>
