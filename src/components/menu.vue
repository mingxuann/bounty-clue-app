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
        <div
            class="menu-item"
            :class="{ 'menu-item-active': route.path == item.path }"
            v-for="item in menuList"
            @click="routerPush(item)">
            {{ item.name }}
        </div>
    </div>
</template>
<style lang="less" scoped>
.menu-box {
    width: 300px;
    background-color: rgb(42, 42, 47);
    display: flex;
    flex-direction: column;
    border-right: 1px solid #999;
    padding-top: 70px;
    box-sizing: border-box;
    .menu-item {
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        font-weight: 400;
        color: #fafdfa;
        cursor: pointer;
        padding-left: 70px;
    }
    .menu-item-active {
        background-color: #999;
    }
}
</style>
