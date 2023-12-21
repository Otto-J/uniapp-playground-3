<template>
  <view class="content">
    <div @tap="add">
      current
      <button>
        {{ counter.count }}
      </button>
    </div>
    <navigator url="/pages/about/index">
      <button>go about</button>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
  console.log(2);
  // #ifdef MP-KUAISHOU
  console.log("快手小程序");
  uni.setStorage({
    key: "test",
    data: "快手小程序",
    success: function () {
      console.log("success");
    },
  });
  // #endif
});
import { useCounterStore } from "@/store/counter";

const counter = useCounterStore();

const add = () => {
  counter.increment();
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
@/store/counter
