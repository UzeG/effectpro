<template>
  <div class="sub-container">
    <video class="bg-audio" :src="getAudio('循环2.mp3')" autoplay loop></video>
    <div class="title" @click="pushRoute('/index')"></div>

    <div class="effect-wrapper" style="background-color: rgb(151, 93, 229);">
      <QianYin01 />
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(255, 255, 255);">
      <iframe :src="getEffect('橘02_03点击切换多视频/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <iframe :src="getEffect('橘04/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <iframe :src="getEffect('橘05/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper" style="background-color: rgb(0, 245, 212);">
      <QianYin06 />
    </div>

    <div class="effect-wrapper" style="background-color: rgb(0, 245, 212);">
      <SpotLight />
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <iframe :src="getEffect('橘08/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 187, 249);">
      <iframe :src="getEffect('209旋转/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 187, 249);">
      <iframe :src="getEffect('橘10液态波动/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <iframe :src="getEffect('橘11/index.html')" frameborder="0"></iframe>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { getAudio, getEffect } from '../js';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

import QianYin01 from '../components/sub2/QianYin01.vue';
import QianYin06 from '../components/sub2/QianYin06.vue';
import SpotLight from '../components/sub2/SpotLight.vue';

const pushRoute = (n: string) => {
  router.push(n);
}

</script>

<style scoped lang="less">
@import url(../style/subPage-base.less);

.sub-container {
  .title {
    width: calc(441px / 8);
    height: calc(665px / 8);
    background-image: url(../assets/imgs/base/橘.png);
    background-size: contain;
    background-repeat: no-repeat;
    left: 2rem;
    top: 2rem;
  }
}
</style>