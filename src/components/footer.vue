/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
const pushLink = (link) => {
    window.open(link, '_blank')
}
</script>
<template>
    <div class="footer">
        <div class="footer-left">
            <img
                class="logo-img"
                src="@/assets/image/commit/logo.svg"
                @click="router.push('/home')" />
            <p class="privacy-pollcyb">BonutyClue © 2022. All right reserved.</p>
        </div>
        <div class="footer-right">
            <div class="privacy-pollcy-box">
                <p class="privacy-pollcy">Privacy Policy</p>
                <p class="privacy-pollcy">Terms & Conditions</p>
            </div>
            <div class="iconfont-list">
                <i class="iconfont icon-medium"></i>
                <i
                    class="iconfont icon-twitter-fill"
                    @click="pushLink('https://twitter.com/BountyClue')"></i>
                <i class="iconfont icon-discord"></i>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.footer {
    height: 140px;
    background-color: #000;
    box-shadow: 0px 4px 12px 1px rgba(106, 106, 106, 0.31);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
    .footer-left {
        .logo-img {
            width: 55px;
            height: 67px;
        }
        .privacy-pollcyb {
            font-size: 12px;
            font-weight: 400;
            color: #918c8c;
            margin-top: 10px;
        }
    }
}
@media screen and (max-width: 600px) {
    .privacy-pollcy {
        display: none;
    }
}
</style>
