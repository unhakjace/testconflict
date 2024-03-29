<script setup>
import MainTit from "@/views/MainTit.vue"
import port_left_arrow from "@/assets/port_left_arrow.svg"
import port_right_arrow from "@/assets/port_right_arrow.svg"
import port_fir_img from "@/assets/Frame 48096254.svg"

const titObject = {
        str_tit: "PORTFOLIO",
        p_tit: "우리의 최신 기술과 파트너사와 협업을 활용하여 클라이언트의 예상효과와 구체적인 성과 지표로 제시하며,",
        p_tit2: "그에 따른 성과와 성장 과정을 자세히 보여줄 수 있습니다."
    }

</script>

<template>
    <section>
        <div class="fourthPage">
            <div class="listarea">
                <MainTit :titObject="titObject"></MainTit>
                <div class="portfolio_list">
                    <img class="left" :src="port_left_arrow">
                    <div class="portfolio_items">
                        <img :src="port_fir_img">
                        <img :src="port_fir_img">
                        <img :src="port_fir_img">
                    </div>
                    <img class="right" :src="port_right_arrow">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>