<template>
  <div>
    <div>微信新版 canvas</div>
    <div style="outline: 1px solid green">
      <canvas id="myCanvas6" canvas-id="myCanvas6" type="2d" style="height: 150px" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from "vue";
import { onMounted } from "vue";

const canvasIdErrorCallback = (e: any) => {
  console.error(e.detail.errMsg);
};

/** 使用的 fields */
function render6() {
  const ins = getCurrentInstance();
  const query = uni.createSelectorQuery().in(ins);

  query
    .select("#myCanvas6") // 在 WXML 中填入的 id
    .fields({ node: true, size: true })
    .exec((res) => {
      // Canvas 对象
      const canvas = res[0].node;

      // 这里可以执行 canvas 提供的方法
      // https://developers.weixin.qq.com/miniprogram/dev/api/canvas/Canvas.requestAnimationFrame.html
      console.log(typeof canvas.requestAnimationFrame === "function");

      // 渲染上下文
      const ctx = canvas.getContext("2d");
      const context = ctx;
      // debugger;

      // 绘制红色正方形
      context.fillStyle = "rgb(200, 0, 0)";
      context.fillRect(10, 10, 50, 50);

      // 绘制蓝色半透明正方形
      context.fillStyle = "rgba(0, 0, 200, 0.5)";
      context.fillRect(30, 30, 50, 50);
      // context.draw();
    });
}

onMounted(() => {
  render6();
});
</script>

<style></style>
