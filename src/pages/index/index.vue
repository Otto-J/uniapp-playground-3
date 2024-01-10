<template>
  <div>
    <div>hi</div>
  </div>
</template>
<script lang="ts" setup>
import {
  onNavigationBarSearchInputClicked,
  onNavigationBarSearchInputChanged,
  onNavigationBarSearchInputConfirmed,
} from "@dcloudio/uni-app";

onNavigationBarSearchInputClicked((e) => {
  console.log("onNavigationBarSearchInputClicked", e);
});

onNavigationBarSearchInputConfirmed((e) => {
  console.log("点击了确定", e.text);
});

onNavigationBarSearchInputChanged((e) => {
  console.log("输入框的内容是", e.text);
});
</script>

<style></style>
