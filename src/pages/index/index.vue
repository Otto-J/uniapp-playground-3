<template>
  <div class="named-slot-demo">
    <slotComp>
      <template #header-slot>
        <h1>header-slot</h1>
      </template>
    </slotComp>
  </div>
</template>
<script lang="ts" setup>
import slotComp from "./slot-comp.vue";
</script>

<style></style>
