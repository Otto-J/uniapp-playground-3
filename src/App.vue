<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

console.log("api key==", import.meta.env.VITE_KEY);
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
