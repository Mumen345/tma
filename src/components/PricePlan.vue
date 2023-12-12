<template>
    <div class="pp_container">
        <div class="toggle_toggle">
            <div class="text_container" @click="showmonthly" :class="{ active: isActive }">
                <p>Monthly</p>

            </div>
            <div class="text_container" @click="showAnually" :class="{ active: isActive2 }">
                <p>Annual <span>
                        Save 30%
                    </span> </p>
            </div>
        </div>
        <div class="price_container">
            <div class="col_1">
                <div>
                    <p class="choose_header">CHOOSE YOUR PLAN FOR YOUR BRAND</p>
                    <p class="choose_paragraph">Choose the plan that’s right for your brand. Whether you’re just getting
                        started
                        with your brand.</p>
                </div>
                <div class="plan_active_section">
                    <p>BRAND</p>
                    <p>Brand Strategy</p>
                    <p>Brand Idetity</p>
                    <p>Branding</p>
                </div>
                <div class="plan_active_section2">
                    <p>CONTENT</p>
                    <hr />
                    <p>Content Strategy</p>
                    <hr />
                    <p>Content Consultancy</p>
                    <hr />
                    <p>Content Calender </p>
                    <hr />
                    <p> <span class="activeGlow">Content Creation ↗</span> </p>
                    <hr />
                    <p> <span class="activeGlow">Video ↗</span> </p>
                    <hr />
                    <p>TikTok </p>
                    <hr />
                    <p>Reels</p>
                    <hr />
                    <p>Promo Videos</p>
                    <hr />
                    <p>pfestyle Videos</p>
                    <hr />
                    <p> <span class="activeGlow">Pictures ↗</span> </p>
                    <hr />
                    <p>Studio Shot</p>
                    <hr />
                    <p>Lifestyle Shot</p>
                    <hr />
                    <p>Dump Shot</p>
                    <hr />
                    <p> <span class="activeGlow">Graphics ↗</span> </p>
                    <hr />
                    <p>Marketing Graphics</p>
                    <hr />
                    <p>3D Graphics</p>
                    <hr />
                    <p>Motion Graphics</p>
                    <hr />
                    <p>Illustration</p>
                    <hr />
                    <p> <span class="activeGlow">Distribution ↗</span> </p>
                    <hr />
                    <p>Meta (Facebook & Instagram)</p>
                    <hr />
                    <p>Twitter</p>
                    <hr />
                    <p>YouTube</p>
                    <hr />
                    <p>TikTok</p>
                    <hr />
                    <p>Snapchat</p>
                </div>
                <div class="plan_active_section2">
                    <p>INFLUENCERS</p>
                    <hr />
                    <p>Micro</p>
                    <hr />
                    <p>Macro</p>
                    <hr />
                    <p>Website</p>
                </div>
                <div>
                </div>
            </div>
            <div class="col_2">
                <div class="price_feature_container">
                    <div class="price_feature_header">
                        <p>Bronze</p>
                        <p> <span>$1500</span>/yr</p>
                        <p>Display stars in Google organic search result and showcase.</p>
                    </div>
                    <button class="subscribe_btn">Subscribe</button>
                </div>
            </div>
            <div class="col_2">
                <div class="price_feature_container">
                    <div class="price_feature_header">
                        <p>Silver</p>
                        <p> <span>$2000</span>/yr</p>
                        <p>Display stars in Google organic search result and showcase.</p>
                    </div>
                    <button class="subscribe_btn">Subscribe</button>
                </div>
            </div>
            <div class="col_2">
                <div class="price_feature_container">
                    <div class="price_feature_header">
                        <p>Gold</p>
                        <p> <span>$3000</span>/yr</p>
                        <p>Display stars in Google organic search result and showcase.</p>
                    </div>
                    <button class="subscribe_btn">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Our Services",
    data() {
        return {
            isActive: true,
            isActive2: false,
        }
    },
    methods: {
        showmonthly: function () {
            this.isActive = true;
            this.isActive2 = false
        },
        showAnually: function () {
            this.isActive2 = true
            this.isActive = false;
        }

    }
}
</script>

<style scoped>
.pp_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    width: 100%;
    margin: 0 auto;
    background-color: #292929;
    padding-top: 60px;
    padding-bottom: 60px;
}

.price_container {
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    color: #ffffff;
    width: 80%;
    margin: 0 auto;
}

.choose_header {
    font-family: ReportFont;
    font-size: 40px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;

}

.choose_paragraph {
    font-family: BrinnanLight !important;
    font-size: 18px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;

}

.toggle_toggle {
    background: #EEEEEE;
    height: 112px;
    left: 455px;
    border-radius: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 10px;
    font-family: BrinnanBold;
}

.active {
    background: #171717;
    color: #ffffff;

}

.text_container {
    width: 283px;
    height: 96px;
    padding: 36px, 49px;
    border-radius: 88.39px;
    gap: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

}


.col_1 {
    width: 325px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 40px;
    padding: 30px 0;
}

.col_2 {
    width: 266px;
    border-radius: 10px;
    border: 1px solid #484848;
    background-color: #4848485C;
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 30px;
}

.subscribe_btn {
    background: #FF540B;
    width: 153px;
    height: 48px;
    padding: 15px, 0px;
    border-radius: 29px;
    outline: none;
    font-family: BrinnanBold;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    text-align: center;
    border: none;
    color: #171717;



}

.price_feature_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.price_feature_header p:nth-child(1) {
    font-family: BrinnanBold;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;


}

.price_feature_header p:nth-child(2) {
    color: #7C7C7C;
    font-family: BrinnanBold;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
}

.price_feature_header p:nth-child(3) {
    font-family: BrinnanLight;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    width: 173px;

}

.price_feature_header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;

}

ul p :nth-child(1) {
    color: #ffffff;
}

.plan_active_section {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 300px;
    padding: 20px 10px;
    border-radius: 10px;
    background-color: #FF540B;
}

.plan_active_section p:nth-child(1) {
    font-family: BrinnanBold;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;

}

.plan_active_section p {
    font-family: BrinnanLight;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    height: 24px;


}

/* .plan_active_section hr {
    width: 100%;
    border: 0;
    height: 0.5px;
    background: #ffffff;
} */

hr {
    width: 100%;
    border: 0;
    height: 0.5px;
    background: #333;
}

.plan_active_section2 p:nth-child(1) {
    font-family: BrinnanBold;
    font-size: 20px;
    font-weight: 900;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
}

.plan_active_section2 {
    font-family: BrinnanLight;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}

.activeGlow {
    font-family: BrinnanBold !important;

}

@media only screen and (max-width: 1291px) {
    .price_container {
        display: flex;
        flex-direction: row;
        gap: 30px;
        justify-content: center;
        color: #ffffff;
        flex-wrap: wrap;
        width: 90%;
        margin: 0 auto;
    }

    @media only screen and (max-width: 704px) {
        .toggle_toggle {
            background: #EEEEEE;
            height: 82px;
            border-radius: 150px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 30px;
            padding: 10px;
            font-family: BrinnanBold;
            width: 90%;
            margin: 0 auto;
            box-sizing: border-box;
        }

        .col_2 {
            width: 100%;
        }

        .col_1 {
            width: 100%;
        }

        .text_container {
            width: 283px;
            height: 65px;
            padding: 36px, 49px;
            border-radius: 88.39px;
            gap: 10px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

        }
    }
}

@media only screen and (max-width: 497px) {
    .col_2 {
        width: 100%;
    }
}
</style>