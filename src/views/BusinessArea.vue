<script setup>
    import MainTit from "@/views/MainTit.vue"
    import arrow from "@/assets/black_right_arrow.svg"
    import fir_img from "@/assets/business_img1.svg"
    import sec_img from "@/assets/business_img2.svg"
    import thr_img from "@/assets/business_img3.svg"
    import four_img from "@/assets/business_img4.svg"
    import fif_img from "@/assets/business_img5.svg"
    import six_img from "@/assets/business_img6.svg"
    const itemObject = [
        {
            tit_img: fir_img,
            tit_fir: 'Search',
            tit_sec: 'Marketing',
            btn: arrow,
            ex_item: "네이버, 카카오, 구글 등의 검색 엔진에서 특정 키워드 검색 시 나타나는 광고를 통해 사용자가 관심을 가질 만한 정보의 노출을 제공합니다."
        },
        {
            tit_img: sec_img,
            tit_fir: 'App',
            tit_sec: 'Marketing',
            btn: arrow,
            ex_item: "이미지나 동영상, 또는 팝업 창을 통해 서비스 이용을 유도합니다. 또한 앱, 웹 제작의 견적 및 기획을 하여 고객들에게 직접적으로 제품을 알리고 홍보합니다."
        },
        {
            tit_img: thr_img,
            tit_fir: 'Display',
            tit_sec: 'Marketing',
            btn: arrow,
            ex_item: "포털 사이트 및 다양한 지면 광고 영역에 배너 형태의 이미지 및 동영상을 노출하여 제품이나 서비스를 홍보합니다. 이는 브랜드 인지도를 증가시키고 고객들의 시선을 사로잡는 데 효과적입니다."
        },
        {
            tit_img: four_img,
            tit_fir: 'Contents',
            tit_sec: 'Marketing',
            btn: arrow,
            ex_item: "소셜 미디어 플랫폼을 활용하여 브랜드 관련 콘텐츠를 노출하여 브랜드와 제품을 홍보합니다. 이는 고객들과의 상호작용을 통해 브랜드 인지도를 높이고 제품을 쇄하는 데 도움이 됩니다."
        },
        {
            tit_img: fif_img,
            tit_fir: 'Shopping',
            tit_sec: 'Marketing',
            btn: arrow,
            ex_item: "다양한 쇼핑 피드로 이미지를 노출하고, 사용자가 바로 구매로 연동되는 광고를 통해 제품이나 서비스를 홍보합니다. 이는 고객들의 직접적인 구매 유도에 효과적입니다."
        },
        {
            tit_img: six_img,
            tit_fir: 'Live',
            tit_sec: 'Commerce',
            btn: arrow,
            ex_item: "실시간으로 상품을 소개하고 고객들과의 직접적인 소통을 통해 제품을 판매하는 전략입니다. 이는 고객들에게 보다 직접적이고 현장감 있는 구매 경험을 제공합니다."
        },
    ]
    const titObject = {
        str_tit: "BUSINESS AREA",
        p_tit: "무엇보다 마케팅 광고에 열정이 넘치는 사람들이 모여서 가치 있는 마케팅을 하는 것에 집중하고 있습니다."
    }
</script>

<template>
    <section>
        <div class="secondPage">
            <div class="listarea">
                <MainTit :titObject="titObject"></MainTit>
                <div class="businesslist">
                    <div class="itemlist" v-for="listitem of itemObject" :key="listitem">
                        <img :src="listitem.tit_img">
                        <div class="item">
                            <div class="tit_explain">
                                <strong>{{ listitem.tit_fir }}<br>{{ listitem.tit_sec }}</strong>
                                <button>더보기 <img :src="listitem.btn"></button>
                            </div>
                            <div class="explain_item">
                                {{ listitem.ex_item }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>