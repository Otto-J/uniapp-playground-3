<template>
  <view class="content">
    <div @tap="open">open popup</div>
    <uni-popup ref="popup" background-color="#fff">
      <view>
        <text>content</text>
      </view>
    </uni-popup>
    <navigator url="/pages/about/index">
      <button>go about page</button>
    </navigator>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello");
const popup = ref();
const open = () => {
  console.log(popup.value);
  popup.value.open();
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
