<template>
  <view class="content">
    <div
      title="基础卡片"
      sub-title="副标题"
      extra="额外信息"
      thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png"
    >
      <test1 id="ccc" ref="comp"></test1>
      <div
        class="abc"
        id="abc"
        data-name="name"
        data-age="18"
        style="outline: 1px solid red; background-color: aqua"
      >
        hi
      </div>
    </div>
    <button @click="queryChild">上传文件</button>
  </view>
</template>

<script setup lang="ts">
import test1 from "@/component/test1.vue";
import { onLoad } from "@dcloudio/uni-app";
import { onMounted, ref } from "vue";
const comp = ref();
// const title = ref("Hello");
const queryChild = () => {
  try {
    const query = uni.createSelectorQuery(); //.in(this);
    // const query = uni.createSelectorQuery().in(comp);
    query
      // .select(".abc")
      // .select("#ccc   #abc11")
      .select("#ccc >>>  #abc11")
      .fields(
        {
          id: true,
          dataset: true,
          size: true,
          rect: true,
          properties: ["scrollX", "scrollY"],
          computedStyle: ["margin", "backgroundColor"],
          context: true,
        },
        (res) => {
          console.log(4, res);
        }
      )
      .exec(function (res) {
        console.log(5, res);
      });
  } catch (error) {
    console.log("error 报错了", error);
  }

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
};

onMounted(() => {
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
