<template>
  <div>
    <div>微信旧版 canvas</div>
    <div style="outline: 1px solid red">
      <canvas canvas-id="myCanvas" style="height: 150px" />
    </div>

    <div>微信新版 canvas</div>
    <div style="outline: 1px solid green">
      <canvas id="myCanvas2" type="2d" style="height: 150px" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";

/** 旧版 canvas */
{
  const old_context = uni.createCanvasContext("myCanvas");
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
/** 新版 canvas */
{
  onLoad(() => {
    let new_ctx: any;
    uni
      .createSelectorQuery()
      .select("#myCanvas2") // 在 WXML 中填入的 id
      .fields({ node: true, size: true })
      .exec((res) => {
        // Canvas 对象
        const canvas = res[0].node;
        // 渲染上下文
        const ctx = canvas.getContext("2d");

        // Canvas 画布的实际绘制宽高
        const width = res[0].width;
        const height = res[0].height;

        // 初始化画布大小
        const dpr = uni.getWindowInfo().pixelRatio;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        // 清空画布
        ctx.clearRect(0, 0, width, height);

        // 绘制红色正方形
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(10, 10, 50, 50);

        // 绘制蓝色半透明正方形
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
      });
  });
}
</script>

<style></style>
