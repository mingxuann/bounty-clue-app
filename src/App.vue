/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
import Header from '@/components/header.vue'
import Menu from '@/components/menu.vue'
import Footer from '@/components/footer.vue'
import { monitorSize, setScrollbarWidth } from '@/utils/utils.js'
const state = reactive({})
monitorSize()
setScrollbarWidth()
</script>
<template>
    <div class="app">
        <Header />
        <div class="menu-box">
            <Menu />
            <router-view class="router-view"></router-view>
        </div>
        <Footer />
    </div>
</template>
<style lang="less">
@import './assets/iconfont/iconfont.css';
@font-face {
    font-family: SpaceMono;
    src: url('./assets/iconfont/spacemono.ttf');
}
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: #000;
}
.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
.menu-box {
    display: flex;
    .router-view {
        flex: 1;
    }
}
.el-icon {
    width: 40px !important;
    height: 40px !important;
}
</style>
