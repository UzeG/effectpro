<template>
  <div ref="scrollable" class="sub-container">
    <div class="title" @click="pushRoute('/index')">分页1</div>
    <div class="effect-wrapper" style="background-color: rgb(0, 245, 212); opacity: 1;">
      <QianYin />
    </div>
    <div class="effect-wrapper" style="background-color: rgb(0, 187, 249);">
      <XingQiu />
    </div>
    <div class="effect-wrapper" style="background-color: rgb(254, 228, 64);">
      <SpotLight />
    </div>
    <!-- <div class="effect-wrapper" style="background-color: rgb(241, 91, 181);">
      <SimpleCanvasPlane />
    </div> -->
    <div class="effect-wrapper curtainsjs-proj" style="background-color: rgb(241, 91, 181);">
      <iframe :src="getEffect('simplecanvasplane/index.html')" frameborder="0"></iframe>
    </div>
    <div class="effect-wrapper curtainsjs-proj" style="background-color: rgb(151, 93, 229);">
      <iframe :src="getEffect('post_processing_transform/index.html')" frameborder="0"></iframe>
    </div>
    <!-- <div class="effect-wrapper" style="background-color: rgb(151, 93, 229);">
      <PostProcessingTransform />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
// import LocomotiveScroll from 'locomotive-scroll'
import QianYin from '../components/QianYin.vue';
import XingQiu from '../components/XingQiu.vue';
import SpotLight from '../components/SpotLight.vue';
import { getEffect } from '../js';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

const pushRoute = (n: string) => {
  router.push(n);
}

const scrollable = ref<HTMLDivElement>();

onMounted(() => {
  // const smoothScroll = new LocomotiveScroll({
  //   el: scrollable.value,
  //   smooth: true,
  // })
});
</script>

<style scoped lang="less">
@import url(../style/subPage-base.less);
</style>