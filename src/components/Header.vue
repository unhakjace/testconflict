<script setup>
    import { useCounterStore } from '@/stores/totalStores.js'
    const links = [
        {
            link: "/",
            text: "HOME"
        },
        {
            link: "/Home",
            text: "ABOUT"
        },
        {
            link: "/Home2",
            text: "SERVICE"
        },
        {
            link: "/Home2",
            text: "PORTFOLIO"
        },

    ]
    const store = useCounterStore()
</script>

<template>
    <header class="switeHeader">
        <div class="headbox">
            <div class="imgarea">
                <img src="@/assets/Frame 48096034.svg">
            </div>
            <div class="menu">
                <div v-for="item of links" :key="item">
                    <router-link :to="item.link" class="headerlinks">{{ item.text }}</router-link>
                </div>
                <button class="headerbutton" @click="store.GoToQuestion">광고문의</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.switeHeader {

}
</style>