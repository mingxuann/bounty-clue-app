/** * @file * @author 何明暄 */
<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { twitterOauthRequestToken } from '@/api/index.js'
const store = useStore()
const state = reactive({})
const assets = computed(() => store.state.persistence.assets)
const assetsShow = computed(() => store.state.persistence.assetsShow)
const onGetNftAssets = async () => {
    window.location.href = `https://discord.com/oauth2/authorize?response_type=code&client_id=1044864221155954738&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https://app.bountyclue.com&prompt=consent`
}
const onTwitterOauthRequestToken = async () => {
    const res = await twitterOauthRequestToken()
    console.log(res, 'resresres')
    // window.location.href = `https://api.twitter.com/oauth/authorize?oauth_token=${res.data.result.oauthToken}&oauth_verifier=${}`
}
</script>
<template>
    <div>
        <div class="profile-box">
            <p class="title">Profile</p>
            <div class="user-info">
                <div class="head-img"></div>
                <div class="x-land-box">
                    <div class=""></div>
                    <p class="x-land-title">{{ assets }}</p>
                    <div class="verify">
                        <p class="verify-titile">Verify:</p>
                        <div class="discord-box">
                            <div class="discord-item">
                                <div class="discord" @click="onGetNftAssets">Discord</div>
                                <i class="iconfont icon-check"></i>
                            </div>
                            <div class="discord-item">
                                <div class="discord" @click="onTwitterOauthRequestToken">
                                    Twitter
                                </div>
                                <i class="iconfont icon-check"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.profile-box {
    max-width: 1400px;
    min-height: 90vh;
    position: relative;
    overflow: hidden;
    margin: auto;
    padding-top: 70px;
    padding-bottom: 100px;
    box-sizing: border-box;
    .title {
        font-size: 50px;
        font-family: Bahnschrift;
        font-weight: 400;
        color: #fafdfa;
    }
    .user-info {
        margin-top: 60px;
        display: flex;
        .head-img {
            width: 180px;
            height: 180px;
            background: #f4f7f4;
            border-radius: 19px;
        }
        .x-land-box {
            margin-left: 56px;
            .x-land-title {
                font-size: 28px;
                font-weight: 400;
                color: #fafdfa;
            }
            .verify {
                display: flex;
                margin-top: 28px;
                .verify-titile {
                    font-size: 28px;
                    font-weight: 400;
                    color: #fafdfa;
                }
                .discord-box {
                    margin-left: 38px;
                    .discord-item {
                        display: flex;
                        align-items: center;
                        margin-bottom: 20px;
                        .iconfont {
                            font-size: 40px;
                            margin-left: 30px;
                            color: #67c23a;
                            position: relative;
                            top: -5px;
                        }
                    }
                    .discord {
                        width: 187px;
                        height: 41px;
                        background: #f4f7f4;
                        border-radius: 9px;
                        text-align: center;
                        line-height: 41px;
                        font-size: 24px;
                        font-weight: 600;
                        color: #010101;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
