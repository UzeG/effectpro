<template>
  <div class="sub-container">
    <div class="title" @click="pushRoute('/index')">分页2</div>
    <div class="effect-wrapper" style="background-color: rgb(151, 93, 229);">动效1</div>
    <div class="effect-wrapper" style="background-color: rgb(241, 91, 181);">动效2</div>
    <div class="effect-wrapper" style="background-color: rgb(254, 228, 64);">动效3</div>
    <div class="effect-wrapper" style="background-color: rgb(0, 187, 249);">动效4</div>
    <div class="effect-wrapper" style="background-color: rgb(0, 245, 212);">动效5</div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

const pushRoute = (n: string) => {
  router.push(n);
}

</script>

<style scoped lang="less">
@import url(../style/subPage-base.less);
</style>