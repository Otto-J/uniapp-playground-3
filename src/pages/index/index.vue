<template lang="pug">
div
  // #ifdef MP-WEIXIN
  div(@click="sayHi") weixin
  // #endif
  // #ifdef H5
  div(@click="sayHi") h5 web
  // #endif
</template>
<script lang="ts" setup>
const sayHi = () => {
  alert("alert");
};
</script>

<style></style>
