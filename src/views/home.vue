/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({
    pages: 0,
})
</script>
<template>
    <div class="home-box">HOME</div>
</template>
<style lang="less" scoped>
.home-box {
    width: calc(99.9vw - var(--scrollbar));
    height: 100vh;
    position: relative;
    overflow: hidden;
}
</style>
