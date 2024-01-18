<template>
  <div>
    <div>通用</div>
    <div style="outline: 1px solid red">
      <canvas
        @error="canvasIdErrorCallback"
        id="myCanvas3"
        canvas-id="myCanvas3"
        style="height: 150px"
      />
    </div>

    <!-- #ifdef H5 -->
    <H5Canvas />
    <!-- #endif -->

    <!-- #ifdef MP-WEIXIN -->
    <wxCanvas2 />
    <!-- #endif -->
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

// #ifdef H5
import H5Canvas from "./h5.vue";
// #endif

// #ifdef MP-WEIXIN
import wxCanvas2 from "./wx.vue";
// #endif

const canvasIdErrorCallback = (e: any) => {
  console.error(e.detail.errMsg);
};

function drawCanvasHome() {
  const old_context = uni.createCanvasContext("myCanvas3");
  // 若干绘制调用
  // 绘制红色正方形
  old_context.fillStyle = "rgb(200, 0, 0)";
  old_context.fillRect(10, 10, 50, 50);

  // 绘制蓝色半透明正方形
  old_context.fillStyle = "rgba(0, 0, 200, 0.5)";
  old_context.fillRect(30, 30, 50, 50);
  old_context.draw(false, () => {
    // 这里绘制完成
    console.log("draw done");
  });
}

onMounted(() => {
  drawCanvasHome();
});
</script>
