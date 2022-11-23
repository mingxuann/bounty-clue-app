import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from 'postcss-pxtorem'
const { resolve } = require('path')
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            web3: resolve(__dirname, './node_modules/web3/dist/web3.min.js'),
        },
    },
    base: './',
    plugins: [vue()],
    server: {
        host: '0.0.0.0',
        proxy: {
            '/bounty-clue': {
                target: 'http://10.7.11.100:10888',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/bounty-clue/, 'bounty-clue'),
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                px2rem({
                    rootValue: 96, // 1rem的大小
                    propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
                    unitPrecision: 10,
                }),
            ],
        },
    },
})
