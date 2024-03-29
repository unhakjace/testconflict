<script setup>
    import {ref} from 'vue';
    import Son from './Son.vue'
    let bdata = "bind 입니다"
    let mdata = ref("model 입니다")

function handleCustomEvent(payload) {
  alert(payload);
}

</script>

<template>
    <div>{{ mdata }}</div>
    <Son :bdata="bdata" v-model="mdata"  @하와와="console.log" @customEvent=handleCustomEvent>
        <template v-slot:tem="sonprops" >
            나는 template(nameed) slot
            <p>{{ sonprops.giveval }}</p>
            <p>{{ sonprops.txtmsg }}</p>
        </template>
        <template #default="defval">
            나는 template(default) slot
            <p>{{ defval.defcnt }}</p>
        </template>
    </Son>

</template>

<style scoped>
</style>