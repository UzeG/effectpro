<template>
  <div class="index-container">
    <div class="wrapper">
      <video @mouseenter="handleMouseEnterVideoWrapper(0)" @mouseleave="handleMouseEnterVideoWrapper()"
        @click="pushRoute('/sub1')" ref="video1" :src="getVideo('v1.mp4')" loop muted></video>
    </div>
    <div class="wrapper">
      <video @mouseenter="handleMouseEnterVideoWrapper(1)" @mouseleave="handleMouseEnterVideoWrapper()"
        @click="pushRoute('/sub2')" ref="video2" :src="getVideo('v2.mp4')" loop muted></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { getVideo } from '../js'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

const pushRoute = (n: string) => {
  router.push(n);
}

const video1 = ref<HTMLVideoElement>();
const video2 = ref<HTMLVideoElement>();

const videosPlayState = reactive([false, false]);
watch(videosPlayState, v => {
  v[0] ? video1.value?.play() : video1.value?.pause();
  v[1] ? video2.value?.play() : video2.value?.pause();
})

const handleMouseEnterVideoWrapper = (index?: 0 | 1) => {
  if (index == undefined) {
    videosPlayState[0] = false;
    videosPlayState[1] = false;
  } else {
    if (index == 0) {
      videosPlayState[0] = true;
      videosPlayState[1] = false;
    } else {
      videosPlayState[0] = false;
      videosPlayState[1] = true;
    }
  }
}

onMounted(() => {
})
</script>

<style scoped lang="less">
.index-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #000;

  .wrapper {
    width: 50%;
    height: 100%;
    cursor: pointer;

    video {
      width: 100%;
      height: 100%;
    }
  }
}
</style>