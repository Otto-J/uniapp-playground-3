<template>
  <view class="content">
    <button class="my_button" type="primary">hi button</button>
    <!-- <uni-button type="primary">hi button</uni-button> -->
    <!-- <uni-button>hi button</uni-button> -->

    <div>{{ title }}</div>

    <button @click="uploadImage">上传文件</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import uSearchBar from "./u-search-bar.vue";
import { onLoad } from "@dcloudio/uni-app";
const title = ref("Hello");

onLoad(() => {
  console.log("onLoad");
  uni.getNetworkType({
    success: function (res) {
      console.log(res.networkType);
      title.value = res.networkType;
    },
  });
  // alert(
  //   (navigator as any).connection ||
  //     (navigator as any).webkitConnection ||
  //     (navigator as any).mozConnection
  // );
});

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

<style lang="scss">
button[type="primary"] {
  background-color: $uni-color-error;
  color: #fff;
}

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
