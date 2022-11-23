/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<template>
    <div class="claim-box">
        <p class="title">Claim</p>
        <div class="equity-income">
            <div class="equity-income-left">
                <div class="income">
                    <p class="title">Equity Income</p>
                    <p class="detile-qwn">Owned Equity : $Value$ USDT</p>
                    <p class="detile-qwn">Next Claim Amount : $Value$ USDT</p>
                    <p class="detile-qwn">Next Claim Time : $DateTime$</p>
                    <div class="claim">Claim</div>
                </div>
                <div class="income">
                    <p class="title">Bounty Income</p>
                    <p class="detile-qwn">Token Name : $Value$</p>
                    <p class="detile-qwn">Token Amount : $Value$</p>
                    <p class="detile-qwn">Contract Address : $Value$</p>
                    <div class="claim">Claim</div>
                </div>
            </div>
            <div class="equity-income-right">
                <div class="claim-rules">
                    <p class="title">Claim Rules</p>
                    <p class="detile-qwn">1.How to Claim Equity income?</p>
                    <p class="detile-qwn">2.How to Claim Bounty income?</p>
                    <div class="claim">Buy $CLUE</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.claim-box {
    min-height: 100vh;
    padding: 70px;
    box-sizing: border-box;
    .title {
        font-size: 50px;
        font-weight: 400;
        color: #fafdfa;
    }
    .equity-income {
        margin-top: 80px;
        display: flex;
        justify-content: space-between;
        .equity-income-left {
            display: flex;
            flex-direction: column;
            .income {
                width: 718px;
                height: 315px;
                background: #24282c;
                border-radius: 28px;
                padding: 25px 50px;
                box-sizing: border-box;
                position: relative;
                margin-bottom: 30px;
                .title {
                    font-size: 34px;
                    font-weight: 400;
                    color: #fafdfa;
                    margin-bottom: 20px;
                }
                .detile-qwn {
                    font-size: 20px;
                    font-weight: 400;
                    color: #fafdfa;
                    margin-top: 12px;
                }
                .claim {
                    width: 200px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    background: #eaf2e9;
                    border-radius: 21px;
                    font-size: 28px;
                    font-weight: 400;
                    color: #000300;
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
        .equity-income-right {
            .claim-rules {
                width: 650px;
                height: 829px;
                background: #24282c;
                border-radius: 28px;
                padding: 25px 50px;
                box-sizing: border-box;
                position: relative;
                .title {
                    font-size: 34px;
                    font-weight: 400;
                    color: #fafdfa;
                    margin-bottom: 30px;
                }
                .detile-qwn {
                    font-size: 20px;
                    font-weight: 400;
                    color: #fafdfa;
                    margin-bottom: 42px;
                }
                .claim {
                    width: 90%;
                    height: 42px;
                    line-height: 42px;
                    background: #eaf2e9;
                    border-radius: 21px;
                    font-size: 26px;
                    font-weight: 600;
                    color: #000300;
                    padding-left: 30px;
                    box-sizing: border-box;
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }
    }
}
</style>
