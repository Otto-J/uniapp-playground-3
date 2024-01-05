<template>
  <view>
    <camera
      device-position="front"
      flash="off"
      @error="error"
      style="width: 100%; height: 300px"
    ></camera>
    <button @click="takePhoto">拍照</button>
    <view>预览</view>
    <image mode="widthFix" :src="src"></image>
  </view>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const src = ref("");

function takePhoto() {
  const ctx = uni.createCameraContext();
  ctx.takePhoto({
    quality: "high",
    success: (res) => {
      src.value = res.tempImagePath;
    },
  });
}
function error(e) {
  console.log(e.detail);
}
</script>

<style></style>
