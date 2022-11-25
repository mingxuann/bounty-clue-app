/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<template>
    <div>
        <div class="get-clue-box">
            <p class="promotion-title">Get $CLUE</p>
            <div class="get-clue-centent">
                <div class="token-name">
                    <div class="token-name-position">
                        <span class="positionb">
                            <span class="positiona">Token Name</span>
                            :
                            <span class="positionc">$ CLUE</span>
                        </span>
                    </div>
                </div>
                <div class="token-name">
                    <div class="token-name-position">
                        <span class="positionb">
                            <span class="positiona">Total Supply </span>
                            :
                            <span class="positionc">1,000,000,000</span>
                        </span>
                    </div>
                </div>
                <div class="token-name">
                    <div class="token-name-position">
                        <span class="positionb">
                            <span class="positiona">Pre-sale Supply</span>
                            :
                            <span class="positionc">150,000,000</span>
                        </span>
                    </div>
                </div>
                <div class="token-name">
                    <div class="token-name-position">
                        <span class="positionb">
                            <span class="positiona">Sold</span>
                            :
                            <span class="positionc">$Value$</span>
                        </span>
                    </div>
                </div>
                <div class="token-name">
                    <div class="token-name-position">
                        <span class="positionb">
                            <span class="positiona">Price</span>
                            :
                            <span class="positionc">0.005 USDT = 1 $CLUE</span>
                        </span>
                    </div>
                </div>
                <div class="usdt-input">
                    <input class="usdt-input-item" type="text" />
                    <div class="usdt-text">
                        <i class="iconfont icon-usdt"></i>
                        <span>USDT</span>
                    </div>
                </div>
                <div class="usdt-input inputb">
                    <input class="usdt-input-item" type="text" />
                    <div class="usdt-text">
                        <div class="iconfont-box">
                            <i class="iconfont icon-clue"></i>
                        </div>
                        <span>CLUE</span>
                    </div>
                </div>
                <div class="buy-now">Buy Now</div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.get-clue-box {
    max-width: 1400px;
    min-height: 92vh;
    position: relative;
    overflow: hidden;
    margin: auto;
    padding-top: 70px;
    padding-bottom: 100px;
    box-sizing: border-box;
    .promotion-title {
        font-size: 50px;
        font-family: Bahnschrift;
        font-weight: 400;
        color: #fafdfa;
    }
    .get-clue-centent {
        width: 100%;
        background-color: #24282c;
        border-radius: 28px;
        padding: 100px;
        box-sizing: border-box;
        margin-top: 75px;
        .token-name {
            margin-bottom: 18px;
            .token-name-position {
                position: relative;
                text-align: center;
                font-size: 24px;
                font-weight: 400;
                color: #f9f6f6;
                .positiona {
                    position: absolute;
                    right: 20px;
                    top: 0;
                    white-space: nowrap;
                }
                .positionb {
                    position: relative;
                }
                .positionc {
                    position: absolute;
                    left: 20px;
                    top: 0;
                    white-space: nowrap;
                }
            }
        }
        .usdt-input {
            width: 459px;
            height: 60px;
            border: 2px solid #ffffff;
            border-radius: 19px;
            display: flex;
            margin: auto;
            margin-top: 80px;
            .usdt-input-item {
                width: 70%;
                height: auto;
                background-color: transparent;
                border: none;
                border-right: 2px solid #ffffff;
                color: #fff;
                font-size: 28px;
                padding: 0 30px;
                box-sizing: border-box;
            }
            .usdt-text {
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 1;
                .iconfont {
                    font-size: 30px;
                    color: #f9f6f6;
                    margin-right: 10px;
                }
                span {
                    font-size: 23px;
                    font-weight: normal;
                    color: #f9f6f6;
                }
            }
        }
        .inputb {
            margin-top: 40px;
            .iconfont-box {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 10px;
                .iconfont {
                    color: #24282c;
                    font-size: 20px;
                    margin-right: 0;
                    margin-top: 2px;
                }
            }
        }
        .buy-now {
            width: 315px;
            height: 62px;
            background: #eaf2e9;
            border-radius: 28px;
            margin: auto;
            margin-top: 40px;
            font-size: 28px;
            font-weight: 600;
            color: #000000;
            text-align: center;
            line-height: 62px;
        }
    }
}
</style>
