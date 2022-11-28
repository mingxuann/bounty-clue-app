/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<template>
    <div>
        <div class="coming-soon-box">
            <h1>
                Coming <br />
                Soon
            </h1>
        </div>
    </div>
</template>
<style lang="less" scoped>
.coming-soon-box {
    max-width: 1400px;
    min-height: 93vh;
    position: relative;
    overflow: hidden;
    margin: auto;
    padding-top: 100px;
    h1 {
        font-size: 120px;
        color: #fff;
        text-align: center;
        line-height: 130px;
    }
}
</style>
