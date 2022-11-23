/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<template>
    <div class="promotion-box">PPPPP</div>
</template>
<style lang="less" scoped>
.promotion-box {
    width: calc(99.9vw - var(--scrollbar));
    height: 100vh;
    position: relative;
    overflow: hidden;
}
</style>
