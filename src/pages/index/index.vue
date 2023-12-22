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
    events: {
      // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      page1: function (data) {
        console.log(444, data);
      },
    },
    success: function (res) {
      // 通过eventChannel向被打开页面传送数据
      res.eventChannel.emit("page2", { data: "page1 发来的信息" });
    },
  });
};

onUnload(() => {
  // uni.$off("page2Ready");
});
</script>

<style></style>
