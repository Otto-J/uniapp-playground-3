<template>
  <view class="content">
    <uni-card
      title="基础卡片"
      sub-title="副标题"
      extra="额外信息"
      thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
    >
      <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
    </uni-card>
    <slotComp>
      <template #header>
        <view>我是 header slot</view>
        <view>我是 header slot2</view>
      </template>
      <template #footer>
        <view>我是 footer slot</view>
        <view>我是 footer slot2</view>
      </template>
      <view>我是 default slot</view>
      <view>我是 default slot2</view>
    </slotComp>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello");

import slotComp from "./slot-comp.vue";
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
