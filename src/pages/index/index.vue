<template>
  <div>
    <xr-start
      disable-scroll
      id="main-frame"
      width="100"
      height="200"
      :style="`width:${width}px;height:${height}px`"
    />
  </div>
</template>
<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const width = ref(300);
const height = ref(300);
const renderWidth = ref(300);
const renderHeight = ref(300);
onLoad(() => {
  // #ifdef MP-WEIXIN
  const info = wx.getSystemInfoSync();
  // debugger;
  const _width = info.windowWidth;
  const _height = info.windowHeight;
  const _dpi = info.pixelRatio;

  console.log('像素',_width,_height,_dpi)
  console.log('实际像素',_width * _dpi,_height * _dpi)


  width.value = _width;
  height.value = _height;
  renderWidth.value = _width * _dpi;
  renderHeight.value = _height * _dpi;
  // #endif
});
</script>

<style></style>
