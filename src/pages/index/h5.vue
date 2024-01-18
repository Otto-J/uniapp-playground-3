<template>
  <div>
    <canvas id="myCanvas" canvas-id="myCanvas" style="height: 150px" />
    <div>实际测试两种都可以</div>
    <canvas id="myCanvas2" canvas-id="myCanvas2" style="height: 150px" />
    <!-- 下面这种也可以 -->
    <!-- <canvas id="myCanvas2" canvas-id="myCanvas2" type="2d" style="height: 150px" /> -->
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";

/** 旧版 canvas 使用 canvasCtx 实现 */
const oldRender = () => {
  const context = uni.createCanvasContext("myCanvas");
  // 若干绘制调用
  // 绘制红色正方形
  context.fillStyle = "rgb(200, 0, 0)";
  context.fillRect(10, 10, 50, 50);

  // 绘制蓝色半透明正方形
  context.fillStyle = "rgba(0, 0, 200, 0.5)";
  context.fillRect(30, 30, 50, 50);
  context.draw();
};

const newRender = () => {
  const query = uni.createSelectorQuery(); //.in(null);

  query
    .select("#myCanvas2") // 在 WXML 中填入的 id

    .context((res: any) => {
      const context = res.context;
      //   const ctx = context;

      // 绘制红色正方形
      context.fillStyle = "rgb(200, 0, 0)";
      context.fillRect(10, 10, 50, 50);

      // 绘制蓝色半透明正方形
      context.fillStyle = "rgba(0, 0, 200, 0.5)";
      context.fillRect(30, 30, 50, 50);
      context.draw();
    })
    .exec();
};

onMounted(() => {
  oldRender();
  newRender();
});
</script>

<style></style>
