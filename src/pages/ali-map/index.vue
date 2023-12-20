<template>
  <view class="page">
    <view class="page-section">
      <view class="page-section-demo">
        <!-- :controls="controls" -->
        <map
          id="map"
          :longitude="longitude"
          :latitude="latitude"
          :scale="scale"
          :markers="markers"
          :polyline="polyline"
          :polygon="polygon"
          :circles="circles"
          :panels="panels"
          @markerTap="markertap"
          @controlTap="controltap"
          @panelTap="onPanelTap"
          @regionChange="regionchange"
          @tap="tap"
          @calloutTap="callouttap"
          show-location
          style="width: 100%; height: 200px"
          :include-points="includePoints"
          :ground-overlays="groundOverlays"
        >
        </map>
      </view>
    </view>
    <view class="page-section-btns">
      <view @tap="demoResetMap">恢复</view>
      <view @tap="demoGetCenterLocation">获取中心点坐标</view>
      <view @tap="demoMoveToLocation">回到定位点</view>
    </view>
    <view class="page-section-btns">
      <view @tap="demoMarkerAnimation">Marker 动画</view>
      <view @tap="demoMarkerLabel">Label</view>
      <view @tap="demoMarkerCustomCallout">CustomCallout</view>
    </view>
    <view class="page-section-btns">
      <view @tap="demoMarkerAppendStr">文字Marker</view>
      <view @tap="demoTrafficOverlay">路况展示</view>
      <view @tap="demoShowRoute">步行路线规划</view>
    </view>
    <view class="page-section-btns">
      <view @tap="demoCompass">指南针</view>
      <view @tap="demoScale">比例尺</view>
      <view @tap="demoGesture">手势</view>
    </view>
    <view class="page-section-btns">
      <view @tap="demoPolyline">线</view>
      <view @tap="demoPolygon">多边形</view>
      <view @tap="demoCircle">圆</view>
    </view>
    <view class="page-section-btns"> </view>
  </view>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { onReady } from "@dcloudio/uni-app";
import {
  markers,
  panels,
  animMarker,
  labelMarker,
  customCalloutMarker,
  iconAppendStrMarker,
  includePoints,
  baseLongitude,
  baseLatitude,
} from "./model";

interface MapCtx extends UniApp.MapContext {
  updateComponents: (params: any) => void;
  showRoute: (params: any) => void;
  showsCompass: (params: any) => void;
  showsScale: (params: any) => void;
  gestureEnable: (params: any) => void;
  clearRoute: () => void;
}

var myTrafficEnabled = 0;
var myCompassEnabled = 0;
var myScaleEnabled = 0;
var myGestureEnabled = 0;

const longitude = ref(baseLongitude);
const latitude = ref(baseLatitude);
const scale = ref(14);

let mapCtx: MapCtx;

const groundOverlays = ref<any[]>([]);
const circles = ref<any[]>([]);
const polygon = ref<any[]>([]);
const polyline = ref<any[]>([]);

onReady(() => {
  // 使用 uni.createMapContext 获取 map 上下文
  mapCtx = uni.createMapContext("map") as MapCtx;
});

function demoResetMap() {
  mapCtx.clearRoute();
}
function demoGetCenterLocation() {
  mapCtx.getCenterLocation({
    success: (res) => {
      uni.showModal({
        content:
          "longitude:" + res.longitude + "\nlatitude:" + res.latitude + "\nscale:" + res.scale,
      });
      console.log(res.longitude);
      console.log(res.latitude);
      console.log(res.scale);
    },
  });
}
function demoMoveToLocation() {
  mapCtx.moveToLocation({});
}
function demoMarkerAnimation() {
  if (!uni.canIUse("createMapContext.return.updateComponents")) {
    uni.showModal({
      title: "客户端版本过低",
      content: "mapCtx.updateComponents 需要 10.1.35 及以上版本",
    });
    return;
  }

  mapCtx.updateComponents({
    markers: animMarker,
  });
  mapCtx.updateComponents({
    command: {
      markerAnim: [{ markerId: 1, type: 0 }],
    },
  });
}
function demoMarkerLabel() {
  if (!uni.canIUse("createMapContext.return.updateComponents")) {
    uni.showModal({
      title: "客户端版本过低",
      content: "mapCtx.updateComponents 需要 10.1.35 及以上版本",
    });
    return;
  }
  mapCtx.updateComponents({
    scale: 14,
    longitude: longitude.value,
    latitude: latitude.value,
    includePoints,
    markers: labelMarker,
  });
}
function demoMarkerCustomCallout() {
  mapCtx.updateComponents({
    scale: 14,
    longitude: longitude.value,
    latitude: latitude.value,
    includePoints,
    markers: customCalloutMarker,
  });
}
function demoMarkerAppendStr() {
  mapCtx.updateComponents({
    scale: 14,
    longitude: longitude.value,
    latitude: latitude.value,
    includePoints,
    markers: iconAppendStrMarker,
  });
}
function demoTrafficOverlay() {
  if (!uni.canIUse("createMapContext.return.updateComponents")) {
    uni.showModal({
      title: "客户端版本过低",
      content: "mapCtx.updateComponents 需要 10.1.35 及以上版本",
    });
    return;
  }
  myTrafficEnabled = (myTrafficEnabled + 1) % 2;
  mapCtx.updateComponents({ setting: { trafficEnabled: myTrafficEnabled } });
}
function demoShowRoute() {
  mapCtx.showRoute({
    startLat: 30.257839,
    startLng: 120.062726,
    endLat: 30.256718,
    endLng: 120.059985,
    zIndex: 4,
    routeColor: "#FFB90F",
    iconPath:
      "https://gw.alipayobjects.com/mdn/rms_dfc0fe/afts/img/A*EGCiTYQhBDkAAAAAAAAAAAAAARQnAQ",
    iconWidth: 10,
    routeWidth: 10,
  });
}
function demoCompass() {
  myCompassEnabled = (myCompassEnabled + 1) % 2;
  mapCtx.showsCompass({ isShowsCompass: myCompassEnabled });
}
function demoScale() {
  myScaleEnabled = (myScaleEnabled + 1) % 2;
  mapCtx.showsScale({ isShowsScale: myScaleEnabled });
}
function demoGesture() {
  myGestureEnabled = (myGestureEnabled + 1) % 2;
  mapCtx.gestureEnable({ isGestureEnable: myGestureEnabled });
}

function demoPolyline() {
  scale.value = 16;
  longitude.value = baseLongitude;
  latitude.value = baseLatitude;
  polyline.value = [
    {
      points: [
        {
          // 右上
          latitude: 30.264786,
          longitude: 120.10775,
        },
        {
          // 左下
          latitude: 30.268786,
          longitude: 120.10575,
        },
      ],
      color: "#FF0000DD",
      width: 10,
      dottedLine: false,
      iconWidth: 10,
    },
  ];
}
function demoPolygon() {
  scale.value = 16;
  longitude.value = baseLongitude;
  latitude.value = baseLatitude;
  polygon.value = [
    {
      points: [
        {
          // 右上
          latitude: 30.264786,
          longitude: 120.10775,
        },
        {
          // 右下
          latitude: 30.268786,
          longitude: 120.10775,
        },
        {
          // 左下
          latitude: 30.268786,
          longitude: 120.10575,
        },
        {
          // 左上
          latitude: 30.264786,
          longitude: 120.10575,
        },
      ],
      fillColor: "#BB0000DD",
      width: 5,
    },
  ];
}
function demoCircle() {
  {
    scale.value = 16;
    longitude.value = baseLongitude;
    latitude.value = baseLatitude;
    circles.value = [
      {
        longitude,
        latitude,
        color: "#BB76FF88",
        fillColor: "#BB76FF33",
        radius: 100,
        strokeWidth: 3,
      },
    ];
  }
}
function regionchange(e) {
  console.log("regionchange", e);
}
function onPanelTap(e) {
  console.log("paneltap:", e);
}
function markertap(e) {
  console.log("marker tap", e);
}
function controltap(e) {
  console.log("control tap", e);
}
function tap() {
  console.log("tap");
}
function callouttap(e) {
  console.log("callout tap", e);
}
</script>

<style>
page {
  background-color: #f7f7f7;
  box-sizing: border-box;
}

.page {
  font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
  font-size: 24rpx;
  padding: 32rpx;
  flex: 1;
}

.page-description {
  margin-bottom: 32rpx;
}

.page-section {
  background: #fff;
  margin-bottom: 32rpx;
}

.page-section-title {
  padding: 16rpx 32rpx;
}

.page-section-demo {
  padding: 32rpx;
}

.page-section-btns {
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.page-section-btns > view {
  flex: 1;
  height: 84rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #49a9ee;
}
.page-section-btns > view + view {
  border-left: 1px solid #ddd;
}

button {
  margin-top: 20rpx;
  margin-bottom: 20rpx;
}

.bc_blue {
  background-color: #49a9ee;
}

.bc_red {
  background-color: #f04134;
}

.bc_yellow {
  background-color: #ffbf00;
}

.bc_green {
  background-color: #00a854;
}

.form-row {
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  height: 88rpx;
  align-items: center;
}

.form-row-label {
  width: 180rpx;
  font-size: 34rpx;
  margin-right: 10rpx;
  text-align: left;
  color: #000;
}

.form-row-content {
  flex: 1;
  font-size: 34rpx;
}

.form-line {
  height: 1px;
  background-color: #ddd;
  margin-left: 30rpx;
}
</style>
