<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});

// uni.$on("update", function (data) {
//   console.log("监听到事件来自 update ，携带参数 msg 为：" + data.msg);
// });
</script>
<style></style>
