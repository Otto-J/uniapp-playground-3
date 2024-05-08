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
    <button @click="uploadImage">上传文件</button>
    <a1-component >自定义 slot 内容</a1-component>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello");

const uploadImage = () => {
  uni.chooseVideo({
    sourceType: ["camera", "album"],
    success: (chooseImageRes) => {
      const tempFilePaths = chooseImageRes.tempFilePath;
      // debugger;
      uni.uploadFile({
        url: "http://192.168.31.60:3000/upload", //仅为示例，非真实的接口地址
        filePath: tempFilePaths,
        name: "file",
        // only for alipay
        hideLoading: true,

        success: (uploadFileRes) => {
          console.log(uploadFileRes.data);
          // alert ok
          uni.showToast({
            title: "上传成功",
            icon: "success",
            duration: 2000,
          });
        },
        fail: (err) => {
          console.log(err);
          // alert fail
          uni.showToast({
            title: "上传失败",
            icon: "none",
            duration: 2000,
          });
        },
      });
    },
  });
};
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
