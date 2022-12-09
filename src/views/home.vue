/** * @file * @author 何明暄 */
<script setup>
import { reactive, onMounted } from 'vue'
const state = reactive({})
onMounted(() => {
    changeState()
    setInterval(() => {
        changeState()
    }, 5000)
})
const random = (min, max) => Math.floor(min + Math.random() * (max - min))
const remain = (n) => 100 - n
const changeState = () => {
    const blobList = document.querySelectorAll('.blob')
    create(blobList[random(0, blobList.length)])
}

let offset = 25
const create = (blob) => {
    let r = []
    for (let i = 0; i < 4; i++) {
        let n = random(offset, remain(offset))
        r.push(n)
        r.push(remain(n))
    }
    let coordinates = `${r[0]}% ${r[1]}% ${r[2]}% ${r[3]}% / ${r[4]}% ${r[6]}% ${r[7]}% ${r[5]}%`
    blob.style.borderRadius = coordinates
    blob.style.setProperty('--r', `${random(0, 20)}deg`)
}
</script>
<template>
    <div class="wrapper-style">
        <div class="homebg">
            <img class="absolute mark-header-04" src="@/assets/image/home/mark-header-04.png" />
            <img class="absolute mark-header-06" src="@/assets/image/home/mark-header-06.png" />
            <img class="absolute about-obj-1" src="@/assets/image/home/about-obj-1.png" />
            <div class="blob random-shapea"></div>

            <!-- <img class="absolute abouttop" src="@/assets/image/home/abouttop.png" /> -->
            <div class="content-area">
                <div class="bounty-clue">
                    <img class="absolute rocket" src="@/assets/image/home/rocket.png" />
                    <div class="Bounty-clue-content">
                        <p>Bounty<span class="purple">Clue</span></p>
                        <p class="multi-chain">
                            Multi-chain Crypto
                            <br />
                            Assets
                            <br />
                            <span>Promotion</span>
                        </p>
                        <div class="button-box">
                            <button class="button-border start-on">
                                <span>Start On</span>
                                <i class="iconfont icon-fenxiang"></i>
                            </button>

                            <button class="button-border start-on">
                                <span>Start On</span>
                                <i class="iconfont icon-fenxiang"></i>
                            </button>

                            <button class="button-border bounty-quests">
                                <span>Create Bounty Quests</span>
                                <i class="iconfont icon-fenxiang"></i>
                            </button>
                            <div class="third-party">
                                <i class="iconfont icon-discord"></i>
                                <i class="iconfont icon-twitter-fill"></i>
                                <i class="iconfont icon-medium"></i>
                            </div>
                        </div>
                    </div>
                    <img class="absolute circles" src="@/assets/image/home/img-1.png" />
                </div>
                <div class="bounty-about">
                    <img class="abouttop" src="@/assets/image/home/abouttop.png" />
                    <div class="bounty-about-text">
                        <button class="about">About</button>
                        <div>
                            <p>BountyClue</p>
                            <span>Know more about BountyClue</span>
                        </div>
                    </div>

                    <div class="text">
                        Earn tokens by spending very little time completing quests.
                    </div>
                    <div class="text">
                        Provide quests solutions for encryption projects in the form of community
                        governance.
                    </div>
                </div>
                <div class="infomer">
                    <div>Bounty For Infomer</div>
                    <div>Clue For Project</div>

                    <button class="button-border know-more">
                        <span>Know More About BountyClue</span>
                        <i class="iconfont icon-fenxiang"></i>
                    </button>
                </div>

                <div class="bounty-about">
                    <img class="abouttop" src="@/assets/image/home/bountytop.png" />
                    <div class="bounty-about-text">
                        <button class="about Lastest">Lastest</button>
                        <div>
                            <p>Quests</p>
                            <span>Complete and earn rewards</span>
                        </div>
                    </div>
                </div>

                <div class="view-all">
                    <div>
                        <img class="illuimg" src="@/assets/image/home/illuimg.png" />

                        <button class="button-border view-all-but">
                            <span>View All</span>
                            <i class="iconfont icon-fenxiang"></i>
                        </button>
                    </div>
                    <div class="blank-block"></div>
                    <div class="blank-block"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
img {
    max-width: 100%;
    &.absolute {
        position: absolute;
        z-index: -1;
    }
    &.mark-header-04 {
        width: 100%;
    }
    &.mark-header-06 {
        width: 100%;
        top: 646px;
    }
    &.about-obj-1 {
        width: 599px;
        height: 513px;
        top: 848px;
        left: 32px;
    }
}
.blob {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    transform: rotate(var(--r, 0));
    transition: ease 800ms;
    &.random-shapea {
        width: 265px;
        height: 256px;
        top: 724px;
        right: 0px;
        background-color: #172255;
        opacity: 0.5;
    }
}

.button-border {
    border: 2px solid #684fd8;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0px 22px 0px 21px;
    height: 55px;
    span {
        flex: 1;
        font-size: 16px;
        color: #fff;
        text-align: left;
    }
    i {
        color: #fff;
        font-size: 24px;
    }
}
input {
    background: none;
    outline: none;
    border: none;
}
button {
    background: none;
    outline: none;
    border: none;
}
.wrapper-style {
    background: linear-gradient(
        150.57deg,
        #1e0426 2.97%,
        #100c3a 25.62%,
        #130517 51.04%,
        #050130 72.12%,
        #0a0426 91.18%
    );
    background-image: linear-gradient(
        150.57deg,
        rgb(30, 4, 38) 2.97%,
        rgb(16, 12, 58) 25.62%,
        rgb(19, 5, 23) 51.04%,
        rgb(5, 1, 48) 72.12%,
        rgb(10, 4, 38) 91.18%
    );
    .homebg {
        height: 100vh;
        overflow-y: auto;
        background: linear-gradient(
            79.57deg,
            rgba(31, 17, 85, 0) 10.75%,
            #130518 50.17%,
            rgba(31, 17, 85, 0) 106.55%
        );
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background-color: rgba(119, 89, 243, 0.1);

        .content-area {
            max-width: 1200px;
            margin: 0 auto;
            .bounty-clue {
                position: relative;
                display: flex;
                margin-top: 100px;
                .rocket {
                    width: 359px;
                    height: 235px;
                    top: 220px;
                    left: -66px;
                }
                .Bounty-clue-content {
                    color: #fff;
                    margin-top: 332px;
                    p {
                        font-size: 28px;
                        font-family: SpaceMono;
                        .purple {
                            color: #726ad8;
                        }
                        &.multi-chain {
                            margin-top: 29px;
                            font-size: 56px;
                            span {
                                color: #0000ff;
                            }
                        }
                    }
                    .button-box {
                        width: 480px;
                        margin-top: 38px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        .start-on {
                            width: 234px;
                        }
                        .bounty-quests {
                            margin-top: 23px;
                            width: 480px;
                        }
                        .third-party {
                            margin-top: 21px;
                            i {
                                font-size: 28px;
                                margin-right: 24px;
                            }
                        }
                    }
                }
                .circles {
                    width: 486px;
                    height: 503px;
                    top: 216px;
                    right: 0px;
                }
            }

            .bounty-about {
                margin-top: 207px;
                display: flex;
                align-items: center;
                flex-direction: column;
                .abouttop {
                    margin-right: 126px;
                    width: 38px;
                    height: 40px;
                }
                .bounty-about-text {
                    display: flex;
                    padding-bottom: 32px;
                    margin-top: 8px;
                    .about {
                        width: 94px;
                        height: 51px;
                        background: #7759f3;
                        border-radius: 12px;
                        color: #000101;
                        font-weight: 400px;
                        margin-right: 13px;
                        &.Lastest {
                            background: #0000ff;
                        }
                    }
                    div {
                        font-size: 28px;
                        font-weight: 400;
                        color: #ffffff;
                        display: flex;
                        flex-direction: column;
                        p {
                            margin: 0;
                            line-height: 23px;
                        }
                        span {
                            margin-top: 10px;
                            font-size: 16px;
                            line-height: 16px;
                            font-weight: 400;
                            color: #305576;
                        }
                    }
                }
                .text {
                    ont-size: 11px;
                    font-weight: 400;
                    color: #9c9aa5;
                    margin-top: 38px;
                }
            }
            .infomer {
                margin-top: 91px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                div {
                    width: 577px;
                    height: 350px;
                    padding: 28px 40px;
                    color: #ffffff;
                    box-sizing: border-box;
                    border: 2px solid #7759f3;
                    background: linear-gradient(
                        0deg,
                        rgba(30, 16, 77, 0.8) 0%,
                        rgba(28, 14, 71, 0.8) 100%
                    );
                    border-radius: 20px;
                }
                .know-more {
                    width: 100%;
                    margin-top: 13px;
                    border: 1px solid #7759f3;
                    background: linear-gradient(-90deg, #13061b 0%, #1f1154 100%);
                }
            }
            .view-all {
                margin-top: 40px;
                display: flex;
                align-items: flex-end;
                justify-content: space-around;
                .illuimg {
                    width: 315px;
                    height: 552px;
                }
                .view-all-but {
                    width: 440px;
                    margin-top: 42px;
                }
                .blank-block {
                    width: 319px;
                    height: 517px;
                    background: #130518;
                    border: 2px solid #0000ff;
                    border-radius: 20px;
                }
            }
        }
    }
}
</style>
