<template>
  <view>
    <view class="uni-title uni-common-pl">地区选择器</view>
    <view class="uni-list">
      <view class="uni-list-cell">
        <view class="uni-list-cell-left"> 当前选择 </view>
        <view class="uni-list-cell-db">
          <picker @change="bindPickerChange" :value="index" :range="array">
            <view class="uni-input">{{ array[index] }}</view>
          </picker>
        </view>
      </view>
    </view>

    <view class="uni-title uni-common-pl">时间选择器</view>
    <view class="uni-list">
      <view class="uni-list-cell">
        <view class="uni-list-cell-left"> 当前选择 </view>
        <view class="uni-list-cell-db">
          <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
            <view class="uni-input">{{ time }}</view>
          </picker>
        </view>
      </view>
    </view>

    <view class="uni-title uni-common-pl">日期选择器</view>
    <view class="uni-list">
      <view class="uni-list-cell">
        <view class="uni-list-cell-left"> 当前选择 </view>
        <view class="uni-list-cell-db">
          <picker
            mode="date"
            :value="date"
            :start="startDate"
            :end="endDate"
            fields="month"
            @change="bindDateChange"
          >
            <view class="uni-input">{{ date }}</view>
          </picker>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const currentDate = new Date().toISOString().slice(0, 10);

const title = "picker";
const array = ["中国", "美国", "巴西", "日本"];
const index = ref(0);
const date = ref(currentDate);
const time = ref("12:01");

const startDate = computed(() => {
  return getDate("start");
});

const endDate = computed(() => {
  return getDate("end");
});

function bindPickerChange(e) {
  console.log("picker发送选择改变，携带值为", e.detail.value);
  index.value = e.detail.value;
}

function bindDateChange(e) {
  date.value = e.detail.value;
}

function bindTimeChange(e) {
  time.value = e.detail.value;
}

function getDate(type) {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (type === "start") {
    year = year - 60;
  } else if (type === "end") {
    year = year + 2;
  }
  month = month > 9 ? month : "0" + month;
  day = day > 9 ? day : "0" + day;
  return `${year}-${month}-${day}`;
}
</script>

<style>
.uni-title {
  font-size: 15px;
  font-weight: 500;
  padding: 10px 0;
  line-height: 1.5;
}
.uni-common-pl {
  padding-left: 15px;
}

.uni-list {
  background-color: #fff;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.uni-list-cell-left {
  white-space: nowrap;
  font-size: 14px;
  padding: 0 15px;
}
.uni-list-cell {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.uni-list-cell-db,
.uni-list-cell-right {
  flex: 1;
}
</style>
