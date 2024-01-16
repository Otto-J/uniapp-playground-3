<template>
  <div class="w-full">
    <map
      :longitude="dot.longitude"
      :latitude="dot.latitude"
      show-location
      :markers="markers"
      style="outline: 1px solid red; width: 746rpx; height: 50vh"
    >
      <cover-view slot="callout">
        <cover-view class="customCallout" :marker-id="11">
          <cover-view class="content">
            <cover-view style="background-color: blue; color: red">666</cover-view>
          </cover-view>
        </cover-view>
      </cover-view>
    </map>
    <button @tap="addMarker">动态添加 marker</button>
  </div>
</template>
<script lang="ts" setup>
import { onLoad } from "@dcloudio/uni-app";
import { onUnmounted } from "vue";

const dot = { latitude: 39.916633014861084, longitude: 116.3198844199444 };
const dot2 = {
  latitude: 39.919998434612495,
  longitude: 116.31794540154829,
};
let _mapContext: UniApp.MapContext;

// markers 显示标记
const markers = [];
const _markers = [
  {
    id: 11,
    longitude: dot.longitude,
    latitude: dot.latitude,
    iconPath: "/static/logo.png",
    rotate: 0, //45,
    width: 50,
    height: 50,
    anchor: {
      x: 0.5, // 0-1
      y: 0.5,
    },
    customCallout: {
      display: "ALWAYS",
      // display: "BYCLICK",
    },
    ["aria-label"]: "标注地名",
  },
];

onLoad(() => {
  console.log("map onLoad");
  _mapContext = uni.createMapContext("map");
});

const addMarker = () => {
  if (_mapContext) {
    console.log("start add marker");
    _mapContext.addMarkers({
      markers: _markers,
      clear: true,
      success() {
        console.log("marker 动态添加成功");
      },
      complete() {
        console.log("marker 操作完成");
      },
      fail(res) {
        console.log("marker 动态添加失败", res);
      },
    });
    console.log("end add marker");
  }
};

onUnmounted(() => {
  console.log("map onUnmounted");
});
</script>
