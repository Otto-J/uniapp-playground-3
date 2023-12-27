<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <uni-card
      title="基础卡片"
      sub-title="副标题"
      extra="额外信息"
      thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
    >
      <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
    </uni-card>
    <!-- <navigator url="/pages/about/index"> -->
    <button open-type="share">go share</button>
    <!-- </navigator> -->
  </view>
</template>

<script setup lang="ts">
import { onLoad, onShareAppMessage } from "@dcloudio/uni-app";
import { ref } from "vue";
const title = ref("Hello");

onShareAppMessage((option) => {
  console.log("share", option);
  return {
    title: "Hello",
    path: "/pages/index/index?c=4&d=5",
    imageUrl: "/static/logo.png",
    desc: "desc1",
    // query: "a=1&b=2",
  };
});

onLoad((query) => {
  if (query) {
    // do something...
    console.log("query", query);
  }
});
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
