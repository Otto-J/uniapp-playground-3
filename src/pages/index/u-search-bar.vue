<template>
  <div>
    <uni-search-bar
      @confirm="search"
      :focus="true"
      v-model="searchValue"
      @blur="blur"
      @focus="focus"
      @input="input"
      @cancel="cancel"
      @change="change"
      @clear="clear"
    ></uni-search-bar>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const searchValue = ref("");

function search() {
  console.log("search function");
}

function blur() {
  console.log("blur function");
}

function focus() {
  console.log("focus function");
}

function input() {
  console.log("input function");
}

function cancel() {
  console.log("cancel function");
}

function change() {
  console.log("change function");
}

function clear() {
  console.log("clear function");
}
</script>

<style></style>
