<template>
  <div>
    <div>index page</div>

    <button @tap="go">Go to About</button>
    <!-- <navigator url="/pages/about/index">
    </navigator> -->
  </div>
</template>
<script lang="ts" setup>
import { onLoad, onUnload } from "@dcloudio/uni-app";

// 这里演示，从 index 跳转到 about 时候，传递信息
const go = () => {
  uni.navigateTo({
    url: "/pages/about/index?msg=hello",
  });
};

onLoad(() => {
  // 思路是先发注册监听、再发送信息

  uni.$on("page2Ready", function (data) {
    console.log("收到 page2 发过来的信息了", data);
    uni.$emit("update", { msg: "页面更新" });
  });
});

onUnload(() => {
  uni.$off("page2Ready");
});
</script>

<style></style>
