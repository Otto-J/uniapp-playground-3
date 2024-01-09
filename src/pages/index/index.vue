<template>
  <view class="content">
    <image class="logo" :src="imgSrc" />
    <div>{{ imgSrc }}</div>
    <button @tap="changeImage">切换图片</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello");

// 静态全部声明
// import a1 from "../../assets/a.jpg";
// import a2 from "../../assets/b.png";

const imgSrc = ref("/static/logo.png");

// see https://cn.vitejs.dev/guide/features.html#glob-import
const modules = import.meta.glob("../../assets/*");

const changeImage = async () => {
  const list = Object.keys(modules);

  // random
  const index = Math.floor(Math.random() * list.length);
  console.log(index);

  modules[list[index]]().then((res: any) => {
    console.log(res);
    imgSrc.value = res.default;
  });
};

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
