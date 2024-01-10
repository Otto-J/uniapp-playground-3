<template>
  <page-meta
    :background-text-style="bgTextStyle"
    :background-color="bgColor"
    :background-color-top="bgColorTop"
    :background-color-bottom="bgColorBottom"
    :scroll-top="scrollTop"
    page-style="color: green"
    :enable-pull-down-refresh="true"
    root-font-size="16px"
  >
    <navigation-bar
      :title="nbTitle"
      :loading="nbLoading"
      :front-color="nbFrontColor"
      :background-color="nbBackgroundColor"
    />
  </page-meta>
  <view class="content">
    <div>这是内容样式受到 page-meta 控制</div>

    <navigator url="/pages/index/index" open-type="navigate" hover-class="navigator-hover">
      <button>返回上一页</button>
    </navigator>
    <div style="height: 200vh"></div>
    <div>buttom</div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      bgTextStyle: "dark",
      scrollTop: "200rpx",
      bgColor: "#ff0000",
      bgColorTop: "#00ff00",
      bgColorBottom: "#0000ff",
      nbTitle: "任意标题",
      nbLoading: false,
      nbFrontColor: "blue",
      nbBackgroundColor: "green",
    };
  },
  onLoad() {
    setInterval(() => {
      this.nbTitle = new Date().toLocaleTimeString();
      // this.nbLoading = !this.nbLoading;
    }, 1000);
  },
  methods: {},
};
</script>
