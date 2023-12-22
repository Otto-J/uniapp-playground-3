<template>
  <div>about page</div>
  <div>
    收到的信息：
    {{ message }}
  </div>
</template>

<script lang="ts" setup>
import { onLoad, onUnload } from "@dcloudio/uni-app";
import { getCurrentInstance } from "vue";
import { ref } from "vue";
const message = ref("");

// vue3 setup 写法
onLoad(() => {
  const { proxy } = getCurrentInstance();
  const eventChannel = proxy.getOpenerEventChannel();
  eventChannel.emit("page1", { data: "data from test page" });
  // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
  eventChannel.on("page2", (data) => {
    console.log(222, data.data);
    message.value = data.data;
  });
});

// vue2 写法
// export default {
//   data() {
//     return { message: "" };
//   },
//   onLoad(option) {
//     const _this = this;
//     const eventChannel = this.getOpenerEventChannel();
//     console.log(111, this.getOpenerEventChannel, eventChannel);
//     eventChannel.emit("acceptDataFromOpenedPage", { data: "data from test page" });
//     eventChannel.emit("someEvent", { data: "data from test page for someEvent" });
//     // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
//     eventChannel.on("acceptDataFromOpenerPage", (data) => {
//       console.log(222, data.data);
//       _this.message = data.data;
//     });
//   },
// };
</script>

<style></style>
