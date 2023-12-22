<template>
  <div>
    <div>index page</div>
    <navigator url="/pages/about/index">
      <button>Go to About</button>
    </navigator>
  </div>
</template>
<script lang="ts" setup>
uni.$emit("update", { msg: "页面更新" });
</script>

<style></style>
