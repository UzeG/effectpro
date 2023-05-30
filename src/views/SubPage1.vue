<template>
  <div ref="scrollable" class="sub-container">
    <video class="bg-audio" :src="getAudio('循环1.mp3')" autoplay loop></video>
    <div class="title" @click="pushRoute('/index')"></div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <iframe :src="getEffect('茶01/index.html')" frameborder="0"></iframe>
    </div>

    <!-- <div class="effect-wrapper" style="background-color: rgb(0, 187, 249);">
      <XingQiu />
    </div> -->

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(151, 93, 229);">
      <iframe :src="getEffect('茶02液态波动/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <QianYin03 />
    </div>

    <div class="effect-wrapper" style="background-color: rgb(254, 228, 64);">
      <SpotLight />
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(151, 93, 229);">
      <iframe :src="getEffect('茶05液态波动/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(151, 93, 229);">
      <iframe :src="getEffect('茶06旋转/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <QianYin />
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <iframe :src="getEffect('茶08/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper iframe-proj" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <iframe :src="getEffect('茶09/index.html')" frameborder="0"></iframe>
    </div>

    <div class="effect-wrapper" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <QianYin10 />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch, Ref } from 'vue'
// import LocomotiveScroll from 'locomotive-scroll'
import QianYin from '../components/sub1/QianYin.vue';
import QianYin10 from '../components/sub1/QianYin10.vue'
import QianYin03 from '../components/sub1/QianYin03.vue'
import XingQiu from '../components/sub1/XingQiu.vue';
import SpotLight from '../components/sub1/SpotLight.vue';
import { getAudio, getEffect } from '../js';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

const pushRoute = (n: string) => {
  router.push(n);
}

// const scrollable = ref<HTMLDivElement>() as Ref<HTMLDivElement>;
// import { gsap } from 'gsap';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'// 导入gsap插件ScrollToPlugin
// gsap.registerPlugin(ScrollToPlugin);

// onMounted(() => {
//   gsap.to(scrollable.value, {
//     scrollTo: { y: 2 * 1080 + 'px' },
//     ease: 'Power2.easeOut',
//     duration: 2
//   })
// })

// const currentEffectIndex = ref(0);
// watch(currentEffectIndex, v => {
//   gsap.to(scrollable.value, {
//     scrollTo: { y: v * 1080 },
//     ease: 'Power2.easeOut',
//     duration: 2
//   })
// });
</script>

<style scoped lang="less">
@import url(../style/subPage-base.less);

.sub-container {
  .title {
    width: 100px;
    height: 100px;
    background-image: url(../assets/imgs/base/茶.png);
    background-size: contain;
    border-radius: 50%;
    left: 1rem;
    top: 1rem;
  }
}
</style>