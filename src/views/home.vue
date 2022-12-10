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
            <img class="absolute line3" src="@/assets/image/home/line3.png" />
            <img class="absolute about-obj-2" src="@/assets/image/home/about-obj-2.png" />
            <div class="blob random-shape-a"></div>
            <div class="blob random-shape-b"></div>
            <div class="blob random-shape-c"></div>
            <div class="blob random-shape-d"></div>
            <img class="absolute about-obj-3" src="@/assets/image/home/about-obj-1.png" />
            <img class="absolute line4" src="@/assets/image/home/line4.png" />
            <img class="absolute line5" src="@/assets/image/home/line5.png" />
            <div class="blob random-shape-e"></div>

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
                    <div class="bounty-about-text">
                        <button class="about">
                            <img class="abouttop" src="@/assets/image/home/abouttop.png" />About
                        </button>
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
                    <div class="bounty-about-text">
                        <button class="about Lastest">
                            <img class="abouttop" src="@/assets/image/home/bountytop.png" />Lastest
                        </button>
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
                <div class="bounty-about">
                    <div class="bounty-about-text">
                        <button class="about promotion">
                            <img class="abouttop" src="@/assets/image/home/Promotiontop.png" />New
                        </button>
                        <div>
                            <p>Promotion</p>
                            <span>Earn the biggest discount</span>
                        </div>
                    </div>
                </div>
                <div class="discount-channel">
                    <div class="discount-content-a">
                        <div class="block-a"></div>
                        <p>
                            Multi-chain
                            <br />
                            <span>Discount Channel</span>
                        </p>
                    </div>
                    <div>
                        <div class="block-b"></div>
                        <div class="block-c"></div>
                    </div>
                    <div>
                        <button class="button-border explore-more">
                            <span>Explore More</span>
                            <i class="iconfont icon-fenxiang"></i>
                        </button>
                        <div class="block-d"></div>
                    </div>
                </div>
                <div class="bounty-about">
                    <div class="bounty-about-text">
                        <button class="about governance-img">
                            <img class="abouttop" src="@/assets/image/home/abouttop.png" />Vote
                        </button>
                        <div>
                            <p>Governance</p>
                            <span>Become a qualified contributor</span>
                        </div>
                    </div>
                </div>
                <div class="governance">
                    <div class="governance-text">
                        <div>
                            <p>Fund Management</p>
                            Jointly manage the use of the fund as a shareholder, expand the scope of
                            the reward, and create stronger momentum for the community.
                        </div>
                        <div>
                            <p>Proposal Voting</p>
                            BountyClue will not reject any proposal that is conducive to ecological
                            development, and can decide whether the proposal is implemented by
                            voting.
                        </div>
                        <div>
                            <p>Community Dao</p>
                            We hope that more community contributors will join in the establishment
                            of Dao and enhance the activity of BountyClue to create greater value.
                        </div>
                    </div>
                    <img class="illuimg2" src="@/assets/image/home/illuimg2.png" />
                </div>

                <div class="bounty-about">
                    <div class="bounty-about-text">
                        <button class="about Bounty">
                            <img class="abouttop" src="@/assets/image/home/bountytop.png" />Bounty
                        </button>
                        <div>
                            <p>Claim</p>
                            <span>Claim your bounty</span>
                        </div>
                    </div>
                </div>
                <div class="steps">
                    <img class="illuclaim" src="@/assets/image/home/illuclaim.png" />
                    <img
                        class="mark1-slider-home2"
                        src="@/assets/image/home/mark1-slider-home2.png" />

                    <div class="step-a">
                        <p class="steps-title">Step 1</p>
                        <p>Connect wallet as proof of registration</p>
                        <button>Connect Wallet</button>
                    </div>
                    <div class="step-b">
                        <p class="steps-title">Step 2</p>
                        <p>Verify your identity as a real human</p>
                        <button>Verify</button>
                    </div>
                    <div class="step-c">
                        <p class="steps-title">Step 3</p>
                        <p>Complete quests and earn bounties</p>
                        <button>Participate</button>
                    </div>
                    <div class="step-d">
                        <p class="steps-title">Step 4</p>
                        <p>Check your eligibility for the promotion</p>
                        <button>Check In</button>
                    </div>
                    <div class="step-e">
                        <p class="steps-title">Step 5</p>
                        <p>Congratulations claim your bounty</p>
                        <button>Claim</button>
                    </div>
                    <img class="aero-bee" src="@/assets/image/home/01.png" />
                </div>
                <div class="bounty-about">
                    <div class="bounty-about-text">
                        <button class="about Clue">
                            <img class="abouttop" src="@/assets/image/home/Promotiontop.png" />Clue
                        </button>
                        <div>
                            <p>Subscribe</p>
                            <span>Let’s Create Great Things</span>
                        </div>
                    </div>
                </div>
                <div class="subscribing">
                    <div class="subscribing-text">
                        Get the newsletter <br />
                        by subscribing
                    </div>
                    <div class="share-input">
                        <input type="text" placeholder="example@gmail.com " />
                        <i class="iconfont icon-fenxiang1"></i>
                    </div>
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
    &.about-obj-2 {
        width: 711px;
        height: 606px;
        top: 1627px;
        right: 35px;
    }
    &.line3 {
        width: 100%;
        top: 1594px;
    }
    &.about-obj-3 {
        width: 814px;
        height: 696px;
        top: 4386px;
        left: 3px;
        opacity: 0.6;
    }
    &.line4 {
        width: 100%;
        top: 5040px;
    }
    &.line5 {
        width: 100%;
        bottom: 0px;
    }
}
.blob {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    transform: rotate(var(--r, 0));
    transition: ease 800ms;
    z-index: -2;
    &.random-shape-a {
        width: 265px;
        height: 256px;
        top: 724px;
        right: 0px;
        background-color: #172255;
        opacity: 0.5;
    }
    &.random-shape-b {
        width: 316px;
        height: 327px;
        top: 2567px;
        right: 26px;
        background-color: #311b52;
        opacity: 0.5;
    }
    &.random-shape-c {
        width: 313px;
        height: 279px;
        top: 4000px;
        left: 0px;
        background-color: #0e2358;
        opacity: 0.5;
    }
    &.random-shape-d {
        width: 265px;
        height: 256px;
        top: 4200px;
        right: 177px;
        background-color: #15193c;
        opacity: 0.5;
    }
    &.random-shape-e {
        width: 283px;
        height: 180px;
        bottom: 0px;
        left: 0px;
        background-color: #3d2572;
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
    overflow: hidden;
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
                // margin-top: 100px;
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
                        position: relative;
                        font-size: 19px;
                        .abouttop {
                            position: absolute;
                            top: -50px;
                            left: 75px;
                            width: 38px;
                            height: 40px;
                        }
                        &.Lastest {
                            background: #0000ff;
                        }
                        &.promotion {
                            background: #3d107b;
                        }
                        &.governance-img {
                            background: #e8641b;
                        }
                        &.Bounty {
                            background: #00a8ec;
                        }
                        &.Clue {
                            background: #79c471;
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
            .discount-channel {
                display: flex;
                justify-content: space-between;
                margin-top: 163px;
                div {
                    display: flex;
                    flex-direction: column-reverse;

                    .explore-more {
                        border-radius: 16px;
                        width: 372px;
                        border: 2px solid #0000ff;
                        margin-top: 16px;
                    }
                    div {
                        border: 2px solid #3d107b;
                        border-radius: 20px;
                        &.block-a {
                            width: 390px;
                            height: 527px;
                            margin-top: 56px;
                        }
                        &.block-b {
                            width: 378px;
                            height: 395px;
                            margin-top: 16px;
                            margin-right: 16px;
                        }
                        &.block-c {
                            width: 378px;
                            height: 272px;
                            margin-left: 16px;
                        }
                        &.block-d {
                            width: 371px;
                            height: 540px;
                        }
                    }
                }
                .discount-content-a {
                    p {
                        font-size: 38px;
                        color: #726ad8;
                        span {
                            color: #ffffff;
                        }
                    }
                }
            }
            .governance {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .governance-text {
                    div {
                        width: 450px;
                        height: 166px;
                        border: 2px solid #7759f3;
                        background: linear-gradient(
                            0deg,
                            rgba(30, 16, 77, 0.8) 0%,
                            rgba(28, 14, 71, 0.8) 100%
                        );
                        border-radius: 20px;
                        margin-bottom: 40px;
                        padding: 22px 100px 22px 22px;
                        box-sizing: border-box;
                        font-size: 11px;
                        font-family: MicrosoftYaHei;
                        font-weight: 400;
                        color: #999999;
                        line-height: 24px;
                        p {
                            font-size: 16px;
                            font-family: Candara;
                            font-weight: 400;
                            color: #ffffff;
                            line-height: 16px;
                            margin-bottom: 30px;
                        }
                    }
                }
                .illuimg2 {
                    width: 712px;
                    height: 353px;
                }
            }
            .steps {
                margin-top: 262px;
                margin-bottom: 334px;
                position: relative;
                .mark1-slider-home2 {
                    position: absolute;
                    left: 98px;
                    top: -235px;
                    width: 230px;
                    height: 296px;
                }
                div {
                    position: absolute;
                    width: 255px;
                    height: 166px;
                    background: #180a2d;
                    border: 1px solid #7043a1;
                    border-radius: 16px;
                    text-align: center;
                    font-weight: 400;
                    color: #ffffff;
                    box-sizing: border-box;
                    padding-top: 28px;
                    padding-bottom: 5px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    .steps-title {
                        font-size: 14px;
                    }
                    p {
                        width: 120px;
                        font-size: 11px;
                    }
                    button {
                        width: 150px;
                        height: 37px;
                        border: 2px solid #c8e19d;
                        border-radius: 16px;
                        font-size: 13px;
                        font-weight: 400;
                        color: #ffffff;
                    }
                    &.step-a {
                        top: 253px;
                        left: 179px;
                    }
                    &.step-b {
                        bottom: 347px;
                        left: 328px;
                    }
                    &.step-c {
                        top: 316px;
                        left: 555px;
                    }
                    &.step-d {
                        bottom: 291px;
                        left: 737px;
                    }
                    &.step-e {
                        bottom: -179px;
                        right: 24px;
                    }
                }

                .aero-bee {
                    width: 184px;
                    height: 311px;
                    position: absolute;
                    right: 6px;
                    top: 49px;
                }
            }
            .subscribing {
                margin-top: 182px;
                padding-bottom: 215px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .subscribing-text {
                    font-size: 38px;
                    font-family: MicrosoftYaHei;
                    font-weight: 400;
                    color: #ffffff;
                    padding-left: 49px;
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        width: 17px;
                        height: 106px;
                        background: #79c471;
                        border-radius: 9px;
                        left: 0;
                        top: 0;
                    }
                }
                .share-input {
                    width: 542px;
                    height: 70px;
                    border: 2px solid #79c471;
                    background: linear-gradient(
                        0deg,
                        rgba(255, 255, 255, 0) 0%,
                        rgba(255, 255, 255, 0) 100%
                    );
                    border-radius: 16px;
                    overflow: hidden;
                    display: flex;
                    box-sizing: border-box;
                    input {
                        flex: 1;
                        padding-left: 49px;
                        color: #fff;
                        &::placeholder {
                            color: #555555;
                            font-size: 17px;
                        }
                    }
                    i {
                        width: 87px;
                        height: 70px;
                        background: #79c471;
                        font-size: 44px;
                        text-align: center;
                        line-height: 70px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
}
</style>
