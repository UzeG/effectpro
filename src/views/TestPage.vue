<template>
  <div class="test-container">
    <div ref="animContainer" class="anim-wrapper">

    </div>
    <div ref="animContainer2" class="anim-wrapper">

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, Ref, reactive, onMounted, watch } from 'vue'
import { LottiePlayer } from 'lottie-web'
import lottie from 'lottie-web'
// @ts-ignore
import { getAfterEffect } from '../js'

const animContainer = ref<HTMLDivElement>() as Ref<HTMLDivElement>;
const animContainer2 = ref<HTMLDivElement>() as Ref<HTMLDivElement>;

const afterEffects = [
  getAfterEffect('blur模糊/blur.json'),
  getAfterEffect('流体文字/data.json')
]

onMounted(() => {
  lottie.loadAnimation({
    container: animContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: afterEffects[0]
  });
  lottie.loadAnimation({
    container: animContainer2.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: afterEffects[1]
  });
});

</script>

<style scoped lang="less">
.test-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.anim-wrapper {
  width: 1920px;
  height: 1080px;
}
</style>