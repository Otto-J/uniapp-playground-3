<template>
  <div>
    <div class="demo" aria-label="普通文本" @tap="elementTap">普通文本</div>
    <!-- #ifdef MP-ALIPAY -->
    <div>支付宝钉钉 都可以看见</div>
    <!-- #ifndef MP-DINGTALK -->
    <div>只有支付宝可以看见</div>
    <!-- #endif -->

    <!-- #ifdef MP-DINGTALK -->
    <div>只有钉钉可以看见</div>
    <!-- #endif -->

    <!-- #endif -->
    <!-- #ifdef MP-WEIXIN -->
    <div>只有微信可以看见</div>
    <!-- #endif -->
  </div>
</template>
<script lang="ts" setup>
console.log(process.env.UNI_PLATFORM);
console.log(process.env.UNI_DEMO_TITLE);
console.log(process.env.ENV_TYPE);

const elementTap = () => {
  console.log("elementTap");
};
</script>

<style></style>
