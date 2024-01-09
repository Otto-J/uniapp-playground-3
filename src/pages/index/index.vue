<template>
  <div>
    <template v-for="item of list" :key="item.id">
      <div>{{ item.id }}</div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const list = ref([{ id: 1 }, { id: 2 }]);
</script>

<style></style>
