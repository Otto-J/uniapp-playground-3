<template>
  <div>
    <pay-button
      class="paypal-button"
      :biz-line="1"
      :mode="2"
      :goods-type="1"
      goods-id="2"
      @getgoodsinfo="getgoodsinfo_func"
      @placeorder="userLogin"
      @pay="onPay"
      @error="error_func"
      @getExtraInfo="getExtraInfo"
    ></pay-button>
  </div>
</template>
<script lang="ts" setup>
// 判断是否支持行业sdk 的 pay-button 组件
if (tt.canIUse("industrySDK.pay-button")) {
  // do something
  console.log(2, "支持行业sdk ok");
} else {
  console.log("error");
}

// 判断是否支持交易模版2.0 和 pay-button 组件
if (tt.canIUse("microapp-trade-plugin")) {
  // do something
  console.log(3, "支持交易模版2.0 ok");
}

const getExtraInfo = (e: any) => {
  console.log("getExtraInfo", e);
};

const dy_pay_error = (e: any) => {
  console.log(2, e);
};

async function dy_pay_applyRefund(event: any) {
  console.log("dy_pay_applyRefund event=", event);
  const { orderId } = event.detail;
  const extra = {
    orderId,
  }; // 开发者需要透传的参数，可自定义内容
  return new Promise((resolve) => {
    resolve(extra);
  });
}

const placeorder_func = (e: any) => {
  console.log("placeorder_func", e);
};

function dy_pay_onRefund(event: any) {
  console.log("dy_pay_onRefund event=", event);
  const { status, result } = event.detail;
  if (status === "success") {
    // uni.$u.toast('退款成功')
    console.log(11);
  }
}
const getgoodsinfo_func = (event: any) => {
  const { goodsId } = event.detail;
  return new Promise((resolve) => {
    // 在此处开发者可以进行商品数据请求，获取商品信息
    // 然后将商品信息传入 resolve 函数
    resolve({
      currentPrice: 9900,
      goodsName: "循礼门M+丨【释集烤肉】99元  原价206.4元超值套餐",
      goodsPhoto:
        "https://p11.douyinpic.com/img/aweme-poi/product/spu/c050f399ac447daf2715e11e6976c2e2~noop.jpeg?from=3303174740",
      goodsLabels: [
        { type: "EXPIRED_RETURNS" }, // 过期退
        { type: "REFUND_ANYTIME" }, // 随时退
        { type: "BOOK_IN_ADVANCE", value: 2 }, // 提前2日预约
      ],
      minLimits: 1,
      maxLimits: 2,
      dateRule: "周一至周日可用",
      relationType: 1,
      validation: {
        phoneNumber: {
          required: true, // 手机号是否必填, 为 true则必填，false选填，默认选填
        },
        reservationType: 1,
        reservationCount: 2,
      },
      extra: {},
      tradeOption: {
        life_trade_flag: 1, // 0：非融合链路（默认值）  1：走融合链路（标准融合/完全融合）
        is_use_tag: true, // 泛知识是否接入交易规则，true：接入 false：不接入（默认值）
      },
      // 在 bind:getgoodsinfo 返回的 promise 的 resolve 函数中新增 marketingVersion 字段
      marketingVersion: 2,
    });
  });
};

const error_func = (e: any) => {
  console.log("error_func", e);
};

const getGoodsInfo = (e: any) => {
  console.log("getGoodsInfo", e);
};

const userLogin = (e: any) => {
  console.log(2, e);
};

const onPay = (e: any) => {
  console.log("onPay", e);
};
</script>

<style></style>
