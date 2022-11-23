/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const state = reactive({})
const router = useRouter()
const route = useRoute()
const menuList = [
    {
        name: 'Promotion',
        path: '/promotion',
    },
    {
        name: 'Incubator',
        path: '/incubator',
    },
    {
        name: 'Governance',
        path: '/governance',
    },
    {
        name: 'Farm',
        path: '/farm',
    },
    {
        name: 'Claim',
        path: '/claim',
    },
    {
        name: 'Profile',
        path: '/profile',
    },
]
const routerPush = (item) => {
    router.push(item.path)
}
</script>
<template>
    <div class="menu-box">
        <div class="menu-item" v-for="item in menuList" @click="routerPush(item)">
            {{ item.name }}
        </div>
    </div>
</template>
<style lang="less" scoped>
.menu-box {
    width: 300px;
    background-color: #333;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #fff;
    .menu-item {
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 30px;
        font-weight: 400;
        color: #fafdfa;
        cursor: pointer;
    }
}
</style>
