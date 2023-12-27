Component({
  data: {
    avatarTextureId: "white",
  },
  methods: {
    handleAssetsProgress: function ({ detail }) {
      console.log("assets progress", detail.value);
    },
    handleAssetsLoaded: function ({ detail }) {
      console.log("assets loaded", detail.value);
    },
    handleReady: function ({ detail }) {
      this.scene = detail.value;
      // 该接口已废弃，请授权后，采用 getUserInfo 代替。
      wx.getUserProfile({
        desc: "获取头像",
        success: (res) => {
          this.scene.assets
            .loadAsset({
              type: "texture",
              assetId: "avatar",
              src: res.userInfo.avatarUrl,
            })
            .then(() => this.setData({ avatarTextureId: "avatar" }));
        },
      });
    },
  },
});
