<template>
  <div>about page</div>
  <div>
    收到的信息：
    {{ message }}
  </div>
</template>
<script lang="ts" setup>
import { onLoad, onUnload } from "@dcloudio/uni-app";
import { ref } from "vue";

// 思路是先发注册监听、再告诉上一个页面准备好了

const message = ref("");

onLoad(() => {
  uni.$on("update", function (data) {
    console.log("page2 监听到事件来自 update ，携带参数 msg 为：" + data.msg);
    message.value = data.msg;
  });
  uni.$emit("page2Ready", { msg: "page2 准备好了，你发送吧" });
});
onUnload(() => {
  uni.$off("update");
});
</script>

<style></style>
