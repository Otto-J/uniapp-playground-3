<template>
    <div>
        <div>{{ store.count }}</div>
        <div>{{ store.doubleCount }}</div>
        <button @click="store.increment">add</button>

    </div>
</template>
<script lang="ts" setup>
import { watchEffect } from 'vue'
import { useCounterStore } from '@/store/counter'

const store = useCounterStore()



</script>

<style></style>