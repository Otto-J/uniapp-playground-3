<template>
  <div>about page222</div>
</template>
<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";

onLoad((option) => {
  //option为object类型，会序列化上个页面传递的参数
  console.log(2, option); //打印出上个页面传递的参数。
});
</script>

<style></style>
