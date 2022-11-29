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
        comingSoon: true,
    },
    {
        name: 'Governance',
        path: '/governance',
        comingSoon: true,
    },
    {
        name: 'Farm',
        path: '/farm',
        comingSoon: true,
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
            <div class="comming-soon-tag" v-if="item.comingSoon">Coming Soon</div>
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
    padding-top: 50px;
    box-sizing: border-box;
    .menu-item {
        height: 80px;
        line-height: 80px;
        font-size: 25px;
        font-weight: 400;
        color: #fafdfa;
        cursor: pointer;
        padding-left: 70px;
        position: relative;
        .comming-soon-tag {
            font-size: 12px;
            position: absolute;
            top: 6px;
            right: 10px;
            background-color: #c2c4ff;
            border-radius: 12px;
            padding: 2px 5px;
            line-height: 20px;
        }
    }
    .menu-item-active {
        background-color: #999;
    }
}
</style>
