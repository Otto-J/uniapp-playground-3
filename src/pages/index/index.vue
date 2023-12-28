<template>
  <div></div>
</template>
<script lang="ts" setup>
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
const DEFAULT_STRIP_REGEXP3 = new RegExp("[^\\p{L}\\d]+", "giu");
console.log(DEFAULT_STRIP_REGEXP, DEFAULT_STRIP_REGEXP3);
</script>

<style></style>
