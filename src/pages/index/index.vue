<template>
  <div>
    <view>map demo</view>
    <map
      :longitude="dot.longitude"
      :latitude="dot.latitude"
      show-location
      :circles="circles"
      :polyline="polyline"
      :markers="markers"
      @markertap="onMarkertap"
      @labeltap="onLabeltap"
      @callouttap="onCallouttap"
      @controltap="onControltap"
      @regionchange="onRegionchange"
      @tap="onTap"
      @updated="onUpdated"
      @anchorpointtap="onAnchorpointtap"
      @poitap="onPoitap"
      style="outline: 1px solid red; width: 746rpx; height: calc(100vh - 100rpx)"
    ></map>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted } from "vue";

const dot = { latitude: 39.916633014861084, longitude: 116.3198844199444 };
const dot2 = {
  latitude: 39.919998434612495,
  longitude: 116.31794540154829,
};

// 地图圆框
const circles = [
  {
    longitude: dot.longitude,
    latitude: dot.latitude,
    color: "#FF0000DD",
    fillColor: "#7cb5ec88",
    radius: 200,
    strokeWidth: 1,
  },
  {
    latitude: dot2.latitude,
    longitude: dot2.longitude,
    color: "#FF0000DD",
    fillColor: "#7cb5ec88",
    radius: 250,
    strokeWidth: 1,
  },
];
// markers 显示标记
const markers = [
  {
    id: 5,
    longitude: dot.longitude,
    latitude: dot.latitude,
    width: 60,
    height: 60,
    iconLayout: {
      params: {
        count: "1",
      },
      src: "/static/marker_icon.xml",
    },
    customCallout: {
      canShowOnTap: true,
      layout: {
        params: {
          title: "标题栏",
          bgColor: "#FF00FF",
        },
        src: "/static/marker_customcallout.xml",
      },
      layoutBubble: {
        style: "bubble",
        bgColor: "#898986",
        borderRadius: 0,
      },
    },
  },
];

// polyline 路线
const polyline = [
  {
    points: [
      {
        latitude: 39.92070131041505,
        longitude: 116.31702092378805,
        // name: "八一湖旅社"
      },
      {
        latitude: 39.91831987978079,
        longitude: 116.31675588473558,
        name: "樱花湖",
      },
      {
        latitude: 39.912221631121064,
        longitude: 116.3193962250391,
        // name: "世纪园"
      },
    ],
    color: "#FF0000DD",
    width: 1,
    dottedLine: false,
    // arrowLine: true,
    // arrowIconPath:"/static/logo.png",
    borderColor: "#ffffff",
    borderWidth: 1,
  },
];

// onMounted(() => {
//   console.log("map onMounted");
// });

onUnmounted(() => {
  console.log("map onUnmounted");
});

const onRegionchange = (e: Event) => {
  console.log("区域滚动，视野发生变化，onRegionchange--", e.type, e.target);
  // console.log("区域滚动，onRegionchange--", e.type, e.target);
};
// onTap e
const onTap = (e: Event) => {
  console.log("随意点击，onTap--");
  // console.log("随意点击，onTap--", e.type, e.target);
};
const onUpdated = (e: Event) => {
  console.log("onUpdated--", e.type, e.target);
};
const onAnchorpointtap = (e: Event) => {
  console.log("onAnchorpointtap", e);
};
const onPoitap = (e: any) => {
  console.log("建筑选中onPoitap--", e.target?.name, e.target);
};
const onMarkertap = (e: any) => {
  console.log("选中了marker,onMarkertap, markerId:", e.detail.markerId);
};
const onLabeltap = (e: Event) => {
  console.log("label 点击，onLabeltap", e);
};
const onCallouttap = (e: Event) => {
  console.log("气泡点击，onCallouttap", e);
};
const onControltap = (e: Event) => {
  console.log("onControltap", e);
};
const markers2 = [
  {
    id: 5,
    latitude: 30.275052,
    longitude: 120.140716,
    width: 60,
    height: 60,
    iconLayout: {
      params: {
        count: "1",
      },
      src: "/layout/marker_icon.xml",
    },
    customCallout: {
      canShowOnTap: true,
      layout: {
        params: {
          title: "标题栏",
          bgColor: "#FF00FF",
        },
        src: "/layout/marker_customcallout.xml",
      },
      layoutBubble: {
        style: "bubble",
        bgColor: "#898986",
        borderRadius: 0,
      },
    },
  },
];
</script>

<style></style>
