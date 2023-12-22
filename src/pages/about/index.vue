<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { ref, reactive, onMounted } from "vue";

const STATIC_HOST = "";

const inputDialog = ref();
const changeAvatar = ref();

const _this = reactive({
  userName: "xx昵称",
  img_main: {
    fileID: 1,
    url: STATIC_HOST + "/avatar.png",
  },
  avatar_url: "",
});

const inputDialogToggle = () => {
  inputDialog.value.open();
};
const dialogInputConfirm = (val) => {
  uni.hideLoading();
  _this.userName = val;
  inputDialog.value.close();
};

const getAvatar = () => {
  changeAvatar.value.choose();
};

const select = async (e) => {};

const submit = async () => {};

onLoad(() => {});

onMounted(() => {});
</script>

<template>
  <view>
    <view class="body">
      <uni-list :border="false">
        <uni-list-item link title="头像" :border="false">
          <template v-slot:footer>
            <image
              class="slot-image"
              :src="_this.img_main.url"
              mode="widthFix"
              @click="getAvatar"
            />
          </template>
        </uni-list-item>

        <uni-list-item
          link
          title="昵称"
          :border="false"
          @click="inputDialogToggle"
          :rightText="_this.userName"
        />
      </uni-list>

      <view class="btn-box">
        <button @click="submit">保存</button>
      </view>
    </view>
    <uni-popup ref="inputDialog" id="inputDialog" type="dialog">
      <uni-popup-dialog
        mode="input"
        title="请输入昵称"
        :value="_this.userName"
        @confirm="dialogInputConfirm"
      />
    </uni-popup>
    <view v-show="false">
      <uni-file-picker
        ref="changeAvatar"
        limit="1"
        :del-icon="false"
        disable-preview
        file-mediatype="image"
        @select="select"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding-top: 45rpx;
}

:deep(.uni-list) {
  width: 100vw;
  background-color: transparent;
}

:deep(.uni-list-item) {
  margin-bottom: 10rpx;
  // #ifdef MP-ALIPAY
  padding-right: 20rpx;

  .uni-icons {
    margin-left: 10rpx;
  }

  // #endif
}

:deep(.uni-list-item__container) {
  display: flex;
  align-items: center;
}

:deep(.uni-list-item__content-title) {
  font-size: 30rpx;
  font-weight: 400;
  color: #030505;
}

.slot-image {
  width: 118rpx;
  height: 118rpx;
  min-height: 118rpx;
}

:deep(.uni-list-item__extra-text) {
  font-size: 28rpx;
  font-weight: 400;
  color: #777b83;
}

.btn-box {
  margin-top: 140rpx;

  button {
    width: 680rpx;
    height: 98rpx;
    line-height: 98rpx;
    background: #2f71ff;
    border-radius: 49rpx;
    font-size: 32rpx;
    font-weight: 500;
    color: #ffffff;

    &::after {
      border: none;
    }
  }
}
</style>
