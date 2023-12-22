<template>
  <div>
    <div>index page</div>

    <button @tap="go">Go to About</button>
    <!-- <navigator url="/pages/about/index">
    </navigator> -->
  </div>
</template>
<script lang="ts" setup>
import { nextTick } from "vue";

// 这里演示，从 index 跳转到 about 时候，传递信息
const go = () => {
  uni.navigateTo({
    url: "/pages/about/index?msg=hello",
  });
};

uni.$on("page2Ready", function (data) {
  console.log("收到 page2 发过来的信息了", data);
  uni.$emit("update", { msg: "页面更新" });
});
</script>

<style></style>
