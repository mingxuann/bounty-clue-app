/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
const onGetNftAssets = async () => {
    window.location.href = `https://discord.com/oauth2/authorize?response_type=code&client_id=1044566263407583242&scope=identify%20guilds.join&state=15773059ghq9183habn&redirect_uri=https://bountyclue.com/bounty-clue/discord/oauth/token/callback&prompt=consent`
}
</script>
<template>
    <div class="profile-box">
        <p class="title">Profile</p>
        <div class="user-info">
            <div class="head-img"></div>
            <div class="x-land-box">
                <p class="x-land-title">0XAD03WD234****9088</p>
                <div class="verify">
                    <p class="verify-titile">Verify:</p>
                    <div class="discord-box">
                        <div class="discord" @click="onGetNftAssets">Discord</div>
                        <div class="discord">Twitter</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.profile-box {
    min-height: 100vh;
    background-color: #333;
    padding: 50px;
    box-sizing: border-box;
    .title {
        font-size: 50px;
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
                        margin-bottom: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>
