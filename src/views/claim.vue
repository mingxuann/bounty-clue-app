/** * @file * @author 何明暄 */
<script setup>
import { reactive } from 'vue'
const state = reactive({})
</script>
<template>
    <div class="claim-bigbox">
        <div class="mint-box" v-if="false">
            <div class="rule-bounty-box">
                <div class="rule-bounty-item">
                    <p class="rule">Rule</p>
                    <p class="boun-text">
                        1. BountyClue will send airdrops to 10K followers <br />
                        2. The first 1k followers will get 10k $CLUE, after that 10% will be
                        deducted for every 1k followers<br />
                        3. The lock-up period is 180 days <br />
                        4. If you participate in the promotion, 10% will be released in advance each
                        time
                    </p>
                </div>
                <div class="rule-bounty-item">
                    <p class="token">Token : ClUE</p>
                    <p class="token">Contract Address :</p>
                    <p class="contract-text">0x60d5430B0537845E42C05E5C269e01B07ff8EEd3</p>
                    <div class="icon-fuzhi-box">
                        <i class="iconfont icon-fuzhi"></i>
                        <div class="add-clue">Add CLUE To Wallet</div>
                    </div>
                </div>
            </div>
            <div class="you-need">
                <p class="you-need-text">You need to complete the following 3 steps :</p>
                <p class="you-need-follow">1. Follow BountyClue on Twitter ;</p>
                <p class="you-need-follow">
                    2. Retweet BountyClue's pinned tweet and notice 3 friends ;
                </p>
                <p class="you-need-follow">3. Join BountyClue's Discord ;</p>
            </div>
            <div class="progress-bar">
                <div class="progress-bar-content">
                    <div class="progress-bar-content-con"></div>
                    <p class="progress-number">0</p>
                    <p class="progress-number left">10,000</p>
                </div>
            </div>
            <div class="mint">Mint</div>
        </div>
        <div class="claim-box" v-if="true">
            <p class="claim">Claim Details</p>
            <p class="contract-text">
                Wallet address : <br />
                0x818bcf71EE9c40BCE2c0B9a24289Ea32f13E6701
            </p>
            <p class="term-p">Term,days : 179</p>
            <p class="term-p">Polar,years : 10%</p>
            <p class="term-p">Total interest : 120</p>
            <p class="term-p">Balance : 10120</p>
            <div class="claim-bounty-item">
                <p class="token">Token : ClUE</p>
                <p class="token">Contract Address :</p>
                <p class="contract-text">
                    0x60d5430B0537845E42C05E5C269e01B07ff8EEd3 <i class="iconfont icon-fuzhi"></i>
                </p>
                <div class="icon-fuzhi-box">
                    <div class="add-clue">Add CLUE To Wallet</div>
                </div>
            </div>
            <div class="claim-button">Claim</div>
        </div>
        <div class="sorry-box" v-if="false">
            <i class="iconfont icon-kulian"></i>
            <p class="sorry">Sorry!</p>
            <p class="sorry">
                The airdrop campaign has ended! <br />
                Follow us on Twitter or join the discord for the latest news.
            </p>
        </div>
    </div>
</template>
<style lang="less" scoped>
.claim-bigbox {
    flex: 1;
}
.mint-box {
    position: relative;
    width: 1218px;
    height: 880px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: auto;
    margin-top: 230px;
    border-radius: 30px;
    padding: 96px 68px;
    box-sizing: border-box;
    .rule-bounty-box {
        display: flex;
        justify-content: space-between;
        .rule-bounty-item {
            width: 500px;
            .rule {
                font-size: 28px;
                color: #5a14db;
                font-weight: 600;
            }
            .boun-text {
                font-size: 22px;
                color: #9d9ba0;
                margin-top: 10px;
            }
            .token {
                font-size: 24px;
                color: #000000;
                line-height: 40px;
                font-weight: 600;
            }
            .contract-text {
                font-size: 20px;
                color: #888484;
                margin-top: 10px;
            }
            .icon-fuzhi-box {
                margin-top: 30px;
                display: flex;
                align-items: center;
                .icon-fuzhi {
                    font-size: 36px;
                    cursor: pointer;
                }
                .add-clue {
                    width: 244px;
                    height: 55px;
                    font-size: 18px;
                    font-weight: 400;
                    color: #010003;
                    line-height: 55px;
                    text-align: center;
                    background: url(/src/assets/image/getstart.png);
                    background-size: 100% 100%;
                    margin-left: 30px;
                    cursor: pointer;
                }
            }
        }
    }
    .you-need {
        margin-top: 62px;
        .you-need-text {
            font-size: 26px;
            font-weight: 400;
            color: #5a14db;
            margin-bottom: 10px;
        }
        .you-need-follow {
            font-size: 24px;
            font-weight: 400;
            color: #010003;
            margin-top: 6px;
        }
    }
    .progress-bar {
        margin-top: 48px;
        .progress-bar-content {
            width: 1082px;
            height: 19px;
            background-color: #fff;
            border-radius: 20px;
            position: relative;
            .progress-bar-content-con {
                width: 500px;
                height: 19px;
                background-color: #5a14db;
                border-radius: 20px;
                position: absolute;
                top: 0;
                left: 0;
            }
            .progress-number {
                font-size: 30px;
                position: absolute;
                left: 0;
                top: 30px;
                color: #8f8b95;
            }
            .left {
                left: auto;
                right: 0;
            }
        }
    }
    .mint {
        width: 305px;
        height: 75px;
        background: url(/src/assets/image/getstart.png);
        background-size: 100% 100%;
        text-align: center;
        line-height: 75px;
        font-size: 36px;
        font-weight: 600;
        margin: auto;
        margin-top: 90px;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.35);
    }
}
.claim-box {
    position: relative;
    width: 676px;
    height: 860px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: auto;
    margin-top: 230px;
    border-radius: 30px;
    padding: 46px 68px;
    box-sizing: border-box;
    .claim {
        font-size: 36px;
        font-weight: 600;
        color: #550fda;
        line-height: 35px;
        text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
    }
    .contract-text {
        font-size: 22px;
        font-weight: 400;
        color: #a09e9e;
        margin: 15px 0;
        line-height: 40px;
        margin-bottom: 30px;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .term-p {
        font-size: 28px;
        font-weight: 600;
        color: #000000;
        text-align: center;
        line-height: 60px;
    }
    .claim-bounty-item {
        width: 550px;
        margin-top: 30px;
        margin-right: 0;
        .rule {
            font-size: 28px;
            color: #5a14db;
            font-weight: 600;
        }
        .boun-text {
            font-size: 22px;
            color: #9d9ba0;
            margin-top: 10px;
        }
        .token {
            font-size: 24px;
            color: #000000;
            line-height: 40px;
            font-weight: 600;
        }
        .contract-text {
            font-size: 20px;
            color: #888484;
            margin-top: 10px;
            white-space: nowrap;
            .icon-fuzhi {
                font-size: 36px;
                cursor: pointer;
            }
        }
        .icon-fuzhi-box {
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            .add-clue {
                width: 244px;
                height: 55px;
                font-size: 18px;
                font-weight: 400;
                color: #010003;
                line-height: 55px;
                text-align: center;
                background: url(/src/assets/image/getstart.png);
                background-size: 100% 100%;
                margin-left: 30px;
                cursor: pointer;
            }
        }
    }
    .claim-button {
        width: 305px;
        height: 75px;
        text-align: center;
        line-height: 75px;
        border-radius: 20px;
        font-size: 36px;
        font-weight: 600;
        text-shadow: 0px 5px 9px rgba(0, 0, 0, 0.31);
        border: 1px solid #550fda;
        margin: auto;
        margin-top: 40px;
    }
}
.sorry-box {
    position: relative;
    width: 1602px;
    height: 773px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: auto;
    margin-top: 230px;
    border-radius: 30px;
    padding: 46px 68px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon-kulian {
        font-size: 60px;
    }
    .sorry {
        font-size: 28px;
        font-weight: 400;
        color: #030000;
        text-align: center;
        margin-top: 30px;
        line-height: 50px;
    }
}
</style>
