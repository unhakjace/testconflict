<script setup>
    import MainTit from "@/views/MainTit.vue"
    const titObject = {
        str_tit: "COMPANY GROWTH",
        p_tit: "전문적인 접근과 최신 기술을 활용하여 예상 성과를 구체적인 지표로 제시하여 고객들의 성장과 발전을 지원합니다."
    }

        const items = Array(17).fill().map((_, index) => `Item ${index + 1}`);
        //

        const txtitems = [
            "0",
            "200",
            "400",
            "600",
            "800",
            "1,000",
            "1,200",
            "1,400",
            "1,600",
            "1,800",
            "2,000",
            "2,200",
            "2,400",
            "2,600",
            "2,800",
            "3,000",
            "3,200",
        ]

        const comitems = [
            {
                fir: "694",
                sec: "광고취급액(단위:억원)"
            },
            {
                fir: "1,224",
                sec: "함께 한 광고주 수"
            },
            {
                fir: "4",
                sec: "임직원 수"
            },
            {
                fir: "2022",
                sec: "설립년도"
            },

        ]


</script>

<template>
    <section>
        <div class="thirdPage">
            <div class="listarea">
                <MainTit :titObject="titObject"></MainTit>
                <div class="companylist">
                    <div class="companychart">
                        <div class="axis_line">
                            <hr v-for="(item, index) in items" :key="index" :class="{ 'st_hr': index === 0, 'la_hr': index === items.length - 1 }">
                        </div>
                        <div class="axis_text" >
                            <div class="text" v-for="(item, index) in txtitems" :key="index">{{ item }}</div>
                        </div>
                        <div class="chartbar">
                            <div class="fir_bar">
                                <span class="year">2022년</span>
                                <span class="count">35건</span>
                            </div>
                            <div class="sec_bar">
                                <div>
                                    <span class="year">2023년</span>
                                    <span class="count">120건</span>
                                </div>
                                <span class="percent">36% 증가</span>
                            </div>
                            <div class="thr_bar">
                                <div>
                                    <span class="year">2024년</span>
                                    <span class="count">694건</span>
                                </div>
                                <span class="percent">82% 증가</span>
                            </div>
                        </div>
                    </div>
                    <div class="companyitems">
                        <div class="companyitem" v-for="item in comitems" :key="item">
                            <p class="fir_comitem">{{ item.fir }}</p>
                            <p class="sec_comitem">{{ item.sec }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>