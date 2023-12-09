<template>
    <div class="service_section">
        <div class="left_div">
            <p class="little_header">Our Service <span><img src="../assets/images/long_arrow.svg" alt="arrow"></span> </p>
            <div class="writeup_div">
                <p class="header">OUR <span class="bold_text">
                        SERVICES
                    </span> </p>
                <p class="writeup">We produce high quality content tailored to the creative needs, goals and target
                    audience. This could
                    involve
                    filming, designing, and recording contents. <br>
                    We have high level production equipment at our disposal to match any content needed.</p>

            </div>
        </div>
        <div class="right_div">
            <div @click="makeActive" class="active">
                <p>Content Creation</p>

            </div>
            <div @click="makeActive">
                <p>Content Strategy</p>

            </div>
            <div @click="makeActive">

                <p>Content Marketing</p>
            </div>
            <div @click="makeActive">
                <p>Analytics and Reporting</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Our Services",
    data() {
        return {
            active: true,
            makeActive: false

        }
    },
}
</script>

<style  scoped>
.little_header img {
    width: 100% !important;
}

.header {
    font-size: 128px;
    line-height: 151.81px;
    font-family: ReportFont;
    font-weight: 400;
}

.bold_text {}

.writeup_div {
    width: 554px;
    height: 497px;
    top: 86px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;

}

.writeup {
    font-family: Brinnan;
    font-size: 20px !important;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: justify;
    width: 390px;
    height: 177px;

}

.little_header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 30px;
    font-family: Brinnan;
    color: #1C1B1B;
    font-size: 32px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;

}



.left_div {
    display: flex;
    flex-direction: column;
    width: 554px;
}

.service_section {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
    background-color: #F6F6F6;
    padding: 69px;
    align-items: center;
}

.right_div div {
    font-family: Brinnan;
    font-size: 32px;
    font-weight: 900;
    letter-spacing: 0em;
    text-align: left;
    color: #909090;
    border-bottom: 1px solid #CFCFCF;
    height: 120px;
    background-color: #F6F6F6;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 30px;
    cursor: pointer;

}

.right_div {
    display: flex;
    text-align: left;
    flex-direction: column;
    width: 45%;
}

.active {
    background-color: #D9D9D9 !important;
    color: #1B1A1A !important;
}

@media only screen and (max-width: 1295px) {
    .left_div {
        display: flex;
        flex-direction: column;
        width: 454px;
    }

    .header {
        font-size: 100px;
        line-height: 120px;
        font-family: ReportFont;
        font-weight: 400;
    }

    .writeup {
        font-family: Brinnan;
        font-size: 20px !important;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: justify;
        width: 390px;
        height: auto;

    }

    .writeup_div {
        width: auto;
        height: 497px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: start;
        align-items: start;

    }

    @media only screen and (max-width: 1034px) {

        .left_div {
            display: flex;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        .writeup_div {
            width: auto;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
            justify-content: start;
            align-items: center;

        }

        .writeup {
            width: 100%;
            text-align: center;
            line-height: 35px;
        }

        .little_header {
            display: none;

        }

        .right_div {
            display: flex;
            text-align: left;
            flex-direction: column;
            width: 100%;
        }

        .service_section {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: space-between;
            background-color: #F6F6F6;
            padding: 20px;
            align-items: center;
        }

        .header {
            font-size: 50px;
            line-height: 60px;
            font-family: ReportFont;
            font-weight: 400;
        }
    }
}
</style>