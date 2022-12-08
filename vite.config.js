import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
                target: 'https://bountyclue.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/bounty-clue/, 'bounty-clue'),
            },
        },
    },
})
