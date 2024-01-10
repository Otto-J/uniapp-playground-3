<template>
  <div>
    <div>hi</div>
    <navigator url="/pages/about/index" open-type="navigate" hover-class="navigator-hover">
      <button>去 about</button>
    </navigator>
    <input
      type="text"
      v-model="title"
      :focus="focus"
      ref="inputRef"
      style="outline: 1px solid red"
    />
  </div>
</template>
<script lang="ts" setup>
import {
  onNavigationBarSearchInputClicked,
  onNavigationBarSearchInputChanged,
  onNavigationBarSearchInputConfirmed,
  onLoad,
} from "@dcloudio/uni-app";
import { onMounted, ref, nextTick } from "vue";
const focus = ref(false);
const title = ref("abc");

const inputRef = ref<HTMLInputElement>();

setTimeout(() => {
  focus.value = true;
}, 4000);

onNavigationBarSearchInputClicked(() => {
  console.log("onNavigationBarSearchInputClicked");
});

onNavigationBarSearchInputConfirmed((e) => {
  console.log("点击了确定", e.text);
});

onNavigationBarSearchInputChanged((e) => {
  console.log("输入框的内容是", e.text);
});
</script>

<style></style>
