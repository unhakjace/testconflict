import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', () => {
    // const count = ref(0)
    // const name = ref('Eduardo')
    // const doubleCount = computed(() => count.value * 2)
    function GoToQuestion() {
        location.href = "/question";
    }
  
    return { GoToQuestion }
  })