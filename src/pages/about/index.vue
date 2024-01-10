<template>
  <div>
    <div>about page</div>
    <view class="ctrlItemContainer">
      <uni-icons type="auth" size="30" class="tip-icon"></uni-icons>
      <uni-easyinput v-model="username" class="uni-mt-5" trim="all" @focus="handleInputFocus" />
    </view>
    <view class="ctrlItemContainer">
      <uni-icons type="locked" size="30" class="tip-icon"></uni-icons>
      <uni-easyinput
        v-model="password"
        type="password"
        class="uni-mt-5"
        trim="all"
        @focus="handleInputFocus"
      />
    </view>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const handleInputFocus = (e) => {
  console.log(e);
};
</script>

<style></style>
