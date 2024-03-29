<script setup>
const emits = defineEmits(['customEvent', '하와와']);
const props = defineProps({
    bdata: {
        type: String,
        required: true
    }

});
let models = defineModel();

// custom v-model
// defineProps({name: ""}) && defineEmits => "update:name"
{/* <Son v-model:name="" /> */}

const giveForPar = "scoped slot 자식이 slot을 통해 보내는 변수 메시지"

// console.log(props.bdata)

function handleClick() {
  // 커스텀 이벤트 발생
  emits('customEvent', 'custom emits 성공');
}

function name(params) {
    const abc = 123;
    // 로직도 실행하고 데이터도 변경하고
    // 호로로로로로...
    emits('하와와', abc)
}

// handleClick()
</script>

<template>
    <div>
        <h1 @click="handleClick">props</h1>
    </div>

    <slot name="tem" txtmsg="slot으로 보내는 텍스트 메시지" :giveval="giveForPar"></slot><br>
    <slot defcnt="디폴트가 보냅니다"></slot>

    <input v-model="models"/>
</template>

<style scoped>
</style>