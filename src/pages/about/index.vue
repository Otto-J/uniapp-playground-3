<template>
  <div @tap="add">
    <div>持久化的结果是：</div>
    <div>
      <!-- {{ counter.count }} -->
    </div>
  </div>
</template>
<script lang="ts" setup>
// import { useCounterStore } from "@/store/counter";

// const counter = useCounterStore();

const add = () => {
  // counter.increment();
};
</script>

<style></style>
