<template>
  <view class="content">
    <!-- #ifdef MP-TOUTIAO -->
    <view> 抖音退款 </view>
    <pay-button
      :order-status="orderStatus"
      :order-id="orderId"
      @refund="dy_pay_onRefund"
      @applyrefund="onApplyRefund"
      @error="dy_pay_error"
    />
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      orderStatus: 1,
      orderId: "20240408153004588692",
    };
  },

  methods: {
    async onApplyRefund(event) {
      // console.log('dy_pay_applyRefund event= ', event)
      let extra = {
        orderId: event.detail,
      }; // 开发者需要透传的参数，可自定义内容
      const res = new Promise((resolve) => {
        resolve(extra);
      });
      console.log(222, res, await res);
      return res;
      // return extra
    },
    // bind:refund-回调
    dy_pay_onRefund(event) {
      console.log(222);
      console.log("dy_pay_onRefund event=", event);
      const { status, result } = event.detail;
      if (status === "success") {
        uni.$u.toast("退款成功");
      }
    },
    dy_pay_error(event) {
      console.log(333, "err", event);
      // console.log('dy_pay_error event=', event)
    },
  },
};
</script>
