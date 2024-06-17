import { defineStore} from 'pinia'
import { ref, computed } from 'vue'


export const useCounterStore = defineStore('counter', () => {
  const count = ref(4)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    console.log('increment')
    count.value++
    // console.log(3,count.value)
  }

  return { count, doubleCount, increment }
})