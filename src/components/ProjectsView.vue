<template>
    <div class="project_container">
        <p class="little_header">PROJECTS <span><img src="../assets/images/long_arrow.svg" alt="arrow"></span> </p>
        <div class="project_images">
            <div class="img_row">
                <img src="../assets/images/first.png" alt="">
                <img src="../assets/images/second.png" alt="">
            </div>
            <div class="img_row">
                <img src="../assets/images/three.png" alt="">
                <img src="../assets/images/forth.png" alt="">
            </div>
            <div class="img_row">
                <img src="../assets/images/fifth.png" alt="">
                <img src="../assets/images/sixth.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.project_container {
    margin: 40px auto;
    width: 90%;
}

.little_header img {
    width: 100% !important;
}

.little_header {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 30px;
    color: #1C1B1B;
    font-size: 105px;
    line-height: 60px;
    font-family: ReportFont;
    font-weight: 400;
    text-align: left;
    width: 100%;
}

.img_row {
    display: flex;
    gap: 30px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 1034px) {
    .project_container {
        margin: 40px auto;
        width: 100%;

    }

    .img_row:nth-child(even) {
        flex-direction: column-reverse;

    }

    .img_row img {
        width: 100%;
    }

    .img_row {
        flex-direction: column;
    }

    .project_images {
        margin: 30px !important;
    }

    .little_header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 0;
        color: #1C1B1B;
        font-family: ReportFont;
        font-weight: 400;
        width: 100%;
        font-size: 50px;
        line-height: 70px;
        text-align: center;
    }

    .little_header img {
        display: none;
    }


}
</style>