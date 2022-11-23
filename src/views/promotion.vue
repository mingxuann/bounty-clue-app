/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<template>
    <div class="promotion-box">
        <p class="promotion-title">Promotion</p>
        <div class="bounty-clue-box">
            <div class="ongoing-box">
                <div class="ongoing-tag">
                    <div class="ongoing-tag-dian"></div>
                    <span>Ongoing</span>
                </div>
            </div>
            <div class="contant-box">
                <div class="bounty-titile">
                    <span>BountyClue</span>
                    <i class="iconfont icon-lianjie"></i>
                    <i class="iconfont icon-twitter-fill"></i>
                    <i class="iconfont icon-discord"></i>
                </div>
                <div class="bounty-contant">
                    BonutyClue is a promotion & group buying platform for crypto assets. It is
                    designed to help crypto investors to buy crypto assets at cheaper prices,
                    investors can get a shorter release cycle, and even have a great chance to
                    release at one time, and the transaction is also fast and safe. BonutyClue is
                    different from other IDO platforms because no threshold is required for investor
                    participation. BonutyClue integrates multi-chain ecological projects, and crypto
                    investors can choose the projects they believe in according to their beliefs.
                </div>
                <div class="official-check">
                    <span>Official Check : </span>
                    <div class="links">Links</div>
                </div>
                <div class="end-date">End Date : <span>43 hours 34 min 33 sec</span></div>
                <div class="participate-now">
                    <span>Participate Now</span>
                    <i class="iconfont icon-fenxiang"></i>
                </div>
            </div>
        </div>
        <div class="chain-list">
            <div class="chain-list-check">
                <span class="chain-box">Chain:</span>
                <div class="checkbox-item">
                    <input type="checkbox" name="all" id="all" checked />
                    <label for="all">All</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" name="binance" id="binance" checked />
                    <label for="binance">Binance</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" name="ethereum" id="ethereum" checked />
                    <label for="ethereum">Ethereum</label>
                </div>
            </div>
            <div class="costo-list">
                <div class="costo-item">
                    <div class="costo-item-box"></div>
                    <div class="costo-detile">
                        <p>COSTO.LAND</p>
                        <p>7 Days 22 : 18 : 22</p>
                        <p>$ 2,000,000 / P 2,000</p>
                    </div>
                </div>
                <div class="costo-item">
                    <div class="costo-item-box"></div>
                    <div class="costo-detile">
                        <p>COSTO.LAND</p>
                        <p>7 Days 22 : 18 : 22</p>
                        <p>$ 2,000,000 / P 2,000</p>
                    </div>
                </div>
                <div class="costo-item">
                    <div class="costo-item-box"></div>
                    <div class="costo-detile">
                        <p>COSTO.LAND</p>
                        <p>7 Days 22 : 18 : 22</p>
                        <p>$ 2,000,000 / P 2,000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.promotion-box {
    width: calc(99.9vw - var(--scrollbar));
    position: relative;
    overflow: hidden;
    padding: 70px;
    box-sizing: border-box;
    .promotion-title {
        font-size: 50px;
        font-family: Bahnschrift;
        font-weight: 400;
        color: #fafdfa;
    }
    .bounty-clue-box {
        width: 1434px;
        background: #191c21;
        border-radius: 28px;
        margin-top: 80px;
        padding: 10px;
        padding-right: 70px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        .ongoing-box {
            width: 459px;
            height: 620px;
            background: #e6e6e6;
            border-radius: 28px;
            position: relative;
            .ongoing-tag {
                width: 144px;
                height: 43px;
                background: #ffffff;
                border: 2px solid #00ff00;
                border-radius: 22px;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                .ongoing-tag-dian {
                    width: 10px;
                    height: 10px;
                    background: #16f107;
                    border: 2px solid #005414;
                    border-radius: 50%;
                    margin-right: 5px;
                }
                span {
                    font-size: 23px;
                    font-weight: 600;
                    color: #010600;
                }
            }
        }
        .contant-box {
            flex: 1;
            margin-left: 70px;
            .bounty-titile {
                line-height: 60px;
                display: flex;
                align-items: center;
                margin-top: 20px;
                span {
                    font-size: 45px;
                    font-weight: 500;
                    color: #fbfcfb;
                }
                i {
                    font-size: 45px;
                    font-weight: 500;
                    color: #fbfcfb;
                    margin-left: 45px;
                }
            }
            .bounty-contant {
                font-size: 23px;
                font-weight: 400;
                color: #fbfcfb;
                line-height: 34px;
                margin-top: 30px;
            }
            .official-check {
                display: flex;
                align-items: center;
                margin-top: 20px;
                span {
                    font-size: 23px;
                    font-weight: 400;
                    color: #fbfcfb;
                }
                .links {
                    width: 133px;
                    height: 36px;
                    line-height: 36px;
                    background: #f4f7f4;
                    border-radius: 9px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #000300;
                    text-align: center;
                    margin-left: 30px;
                }
            }
            .end-date {
                font-size: 23px;
                font-weight: 400;
                color: #f4f7f4;
                margin-top: 16px;
                span {
                    margin-left: 20px;
                }
            }
            .participate-now {
                width: 100%;
                height: 57px;
                background: #0e1116;
                border: 2px solid #ffffff;
                border-radius: 28px;
                margin-top: 30px;
                font-size: 23px;
                font-weight: 400;
                color: #fbfcfb;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 34px;
                box-sizing: border-box;
                .iconfont {
                    font-size: 40px;
                }
            }
        }
    }
    .chain-list {
        margin-top: 150px;
        .chain-list-check {
            display: flex;
            align-items: center;
            .chain-box {
                font-size: 23px;
                font-weight: 400;
                color: #f7f9f7;
            }
            .checkbox-item {
                margin-left: 60px;
                display: flex;
                align-items: center;
                label {
                    font-size: 23px;
                    font-weight: 400;
                    color: #f7f9f7;
                    margin-left: 20px;
                }
            }
        }
        .costo-list {
            .costo-item {
                width: 700px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 40px 0;
                .costo-item-box {
                    width: 165px;
                    height: 165px;
                    background: #f4f7f4;
                    border-radius: 9px;
                }
                .costo-detile {
                    display: flex;
                    flex-direction: column;
                    p {
                        font-size: 23px;
                        font-weight: 400;
                        color: #f7f9f7;
                        margin: 6px 0;
                        text-align: end;
                    }
                }
            }
        }
    }
}
</style>
