<template>
  <view class="content">
    <uni-card
      title="基础卡片"
      sub-title="副标题"
      extra="额外信息"
      thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
    >
      <test1 ref="comp"></test1>
      <div class="abc" style="outline: 1px solid red">hi</div>
    </uni-card>
    <button @click="queryChild">上传文件</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import test1 from "./test1.vue";
import { onMounted } from "vue";
import { onLoad } from "@dcloudio/uni-app";
const comp = ref();
const title = ref("Hello");
const queryChild = () => {
  // #ifdef MP-WEIXIN
  console.log("微信小程序");
  const query = wx.createSelectorQuery().in(this)
  query.select("div").boundingClientRect()
  query.exec(function(res){
    console.log(res)
  })
  // const query = uni.createSelectorQuery().in(this);
  // const query = uni.createSelectorQuery().in(comp.value);
  // query
  //   .select(".test1")
  //   // .select(".test1 >>> .test1-1")
  //   .boundingClientRect((data) => {
  //     console.log(data)
  //     // if (Array.isArray(data)) {
  //     //   console.log("得到布局位置信息" + JSON.stringify(data[0]));
  //     //   console.log("节点离页面顶部的距离为" + data[0]?.top);
  //     // } else {
  //     //   console.log("得到布局位置信息" + JSON.stringify(data));
  //     //   console.log("节点离页面顶部的距离为" + data.top);
  //     // }
  //   })
  //   .exec();
  // #endif

};

onLoad(() => {
  queryChild();
});
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 800rpx; */
  outline: 1px solid red;
  margin: 30rpx auto;
  padding: 40rpx;
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
