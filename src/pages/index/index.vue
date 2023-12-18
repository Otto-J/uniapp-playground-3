<template>
  <view class="content">
    <editor
      id="editor"
      class="ql-container"
      placeholder="开始输入..."
      show-img-size
      show-img-toolbar
      show-img-resize
      @statuschange="onStatusChange"
      @ready="onEditorReady"
    >
    </editor>

    <view>
      <button @tap="undo">Undo</button>
      <button @tap="getCon">获取内容</button>
    </view>
  </view>
</template>

<script setup lang="ts">
declare global {
  interface Window {
    Quill: any;
  }
}

// h5 依赖 quill 依赖，这里引入依赖，挂在全局避免去远程引入
// #ifdef H5
import quill from "quill";
window.Quill = quill;
// #endif

function onStatusChange(e: any) {
  const formats = e.detail;
  formats.value = formats;
}

let editorCtx: any = undefined;

function onEditorReady() {
  // 如果是 H5 等环境，获得 editorCtx
  // #ifdef APP-PLUS || MP-WEIXIN || H5
  uni
    .createSelectorQuery()
    .select("#editor")
    .context((res: any) => {
      editorCtx = res.context;
    })
    .exec();
  // #endif
}

const undo = () => {
  if (editorCtx) {
    editorCtx.undo();
  }
};

function getCon() {
  if (editorCtx) {
    editorCtx.getContents({
      success: (res: any) => {
        console.log("文本详情：", res);
      },
      fail: (err: any) => {
        // console.log(err)
      },
    });
  }
}
</script>
