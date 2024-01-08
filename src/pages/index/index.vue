<template>
  <div>
    <h2>网络类型</h2>
    <div>https://uniapp.dcloud.net.cn/api/system/network.html</div>
  </div>
</template>
<script lang="ts" setup>
const getNetworkType = () => {
  uni.getNetworkType({
    success: function (res) {
      console.log(res.networkType);
    },
  });
};
</script>

<style></style>
