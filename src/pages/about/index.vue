<template>
  <div>about page</div>
</template>
<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";

// 思路是先发注册监听、再告诉上一个页面准备好了
uni.$on("update", function (data) {
  console.log("监听到事件来自 update ，携带参数 msg 为：" + data.msg);
});
uni.$emit("page2Ready", { msg: "page2 准备好了，你发送吧" });

onLoad(() => {});
</script>

<style></style>
