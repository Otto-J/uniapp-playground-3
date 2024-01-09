<template>
  <div>
    <div>下面是 header slot</div>
    <slot name="header">占位符</slot>
    <div>下面是 default slot</div>
    <slot></slot>
    <div>下面是 footer slot</div>
    <slot name="footer">占位符</slot>
  </div>
</template>
<script lang="ts" setup></script>

<style></style>
