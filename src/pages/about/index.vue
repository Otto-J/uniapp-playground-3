<template>
  <div>about page</div>
</template>
<script lang="ts" setup>
import { onLoad, onUnload } from "@dcloudio/uni-app";
uni.$on("update", function (data) {
  console.log("监听到事件来自 update ，携带参数 msg 为：" + data.msg);
});

onLoad(() => {});
</script>

<style></style>
