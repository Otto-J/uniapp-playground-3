<template>
  <div>
    <!-- #ifdef MP-ALIPAY -->
    <div>支付宝钉钉 都可以看见</div>
    <!-- #ifndef MP-DINGTALK -->
    <div>只有支付宝可以看见</div>
    <!-- #endif -->

    <!-- #ifdef MP-DINGTALK -->
    <div>只有钉钉可以看见</div>
    <!-- #endif -->

    <!-- #endif -->
  </div>
</template>
<script lang="ts" setup></script>

<style></style>
