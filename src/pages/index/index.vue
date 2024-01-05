<template>
  <view class="content">
    <div>不点击动态设置 tabBar path，页面会跳到 about111 ，点击之后会跳转到 about222</div>
    <button @click="setTabBarPath">动态设置 tabBar path</button>
    <button @click="go2about">switch tab跳转页面</button>
    <button @click="go2about2">navigator to 跳转页面2</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello");
import { onLoad } from "@dcloudio/uni-app";

onLoad((option) => {
  //option为object类型，会序列化上个页面传递的参数
  console.log(2, option); //打印出上个页面传递的参数。
});
// 这个 demo 只能在 h5 下生效，小程序不支持。
const setTabBarPath = () => {
  // https://uniapp.dcloud.net.cn/api/ui/tabbar.html#settabbaritem
  // 页面绝对路径，必须在 pages 中先定义，被替换掉的 pagePath 不会变成普通页面（仍然需要使用 uni.switchTab 跳转）
  uni.setTabBarItem({
    index: 1,
    text: "about222",
    pagePath: "/pages/about2/index",
  });
};

const go2about = () => {
  uni.switchTab({ url: "/pages/about2/index" });
};

const go2about2 = () => {
  uni.navigateTo({ url: "/pages/about2/index?type=aa" });
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
