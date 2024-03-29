<script setup>
import { defineProps, computed } from 'vue';
const props = defineProps(["titObject"]);

</script>

<template>
    <div class="tit_area">
        <strong>{{ titObject.str_tit }}</strong>
        <p>{{ titObject.p_tit }}</p>
        <p v-if="titObject.p_tit2">{{ titObject.p_tit2 }}</p>
    </div>
</template>

<style scoped>
</style>