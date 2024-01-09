<template>
  <div>
    <div>下面是 header slot</div>
    <slot name="header"></slot>
    <div>下面是 default slot</div>
    <slot></slot>
    <div>下面是 footer slot</div>
    <slot name="footer"></slot>
  </div>
</template>
<script lang="ts" setup></script>

<style></style>
