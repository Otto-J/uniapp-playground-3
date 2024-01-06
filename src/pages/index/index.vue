<template>
  <div>
    <h2>uni.chooseFile</h2>
    <button @click="chooseFile">选择文件</button>
    <h2>uni.chooseImage 推荐使用 uni.chooseMedia</h2>
    <h2>uni.previewImage</h2>
    <button @click="previewImag">预览图片</button>
  </div>
</template>
<script lang="ts" setup>
const previewImag = () => {
  uni.previewImage({
    current: 0,
    urls: [
      "https://1035353822.qnqcdn.net:22443/qn-XVnEBQiNsKSZLNhoiFj4uMVYtWjsUJSk2XG0aLw4.img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg",
      "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni-app.png",
    ],
    // indicator: "default",
    // loop: true,

    showmenu: false,
    success: function () {
      console.log("success");
    },
    fail: function (err) {
      console.log("fail:" + err.errMsg);
    },
    complete: function () {
      console.log("complete");
    },
  });
};

// h5 only
const chooseFile = () => {
  uni.chooseFile({
    count: 1,
    type: "image", // all video image
    extension:[
      // '.jpg',
    'PNG'],
    success: function (res) {
      console.log("success");
    },
    fail: function (err) {
      console.log("fail:" + err.errMsg);
    },
    complete: function () {
      console.log("complete");
    },
  });
};
</script>

<style></style>
