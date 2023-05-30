<template>
  <div ref="indexWrapper" class="index-container" @mouseenter="playFlag = true" @mouseleave="playFlag = false">
    <audio ref="kaiping" :src="getAudio('开屏.mp3')" class="bg-audio" loop @play="onAudioPlay"></audio>
    <div class="wrapper">
      <video @mouseenter="handleMouseEnterVideoWrapper(0)" @mouseleave="handleMouseEnterVideoWrapper()"
        @click="pushRoute('/sub1')" ref="video1" :src="getVideo('00output_4.mp4')" loop muted></video>
    </div>
    <div class="wrapper">
      <video @mouseenter="handleMouseEnterVideoWrapper(1)" @mouseleave="handleMouseEnterVideoWrapper()"
        @click="pushRoute('/sub2')" ref="video2" :src="getVideo('00output_5.mp4')" loop muted></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted, Ref } from 'vue'
import { getAudio, getVideo } from '../js'
import { useRoute, useRouter } from 'vue-router'
import { gsap } from 'gsap';
const route = useRoute();
const router = useRouter();

const pushRoute = (n: string) => {
  router.push(n);
}

const onAudioPlay = () => {
  kaiping.value.play().then(() => {
    // 权限已授予,视频开始播放
  }).catch(() => {
    // 权限被拒绝,请求用户授权
    navigator.mediaDevices.getUserMedia({ audio: true, video: true })
      .then(stream => {
        /* use the stream */
        kaiping.value.play()
      })
      .catch(err => {
        /* handle the error */
      });
  })
}


const video1 = ref<HTMLVideoElement>();
const video2 = ref<HTMLVideoElement>();

const indexWrapper = ref<HTMLDivElement>() as Ref<HTMLDivElement>;
const kaiping = ref<HTMLVideoElement>() as Ref<HTMLVideoElement>;

const playFlag = ref(false);
watch(playFlag, v => {
  console.log(v);
  
  if (v) {
    kaiping.value.play();
    kaiping.value.volume = 0;
    gsap.to(kaiping.value, {
      'volume': 1,
      ease: 'Power2.easeOut',
      duration: 3,
    })
  } else {
    gsap.to(kaiping.value, {
      'volume': 0,
      ease: 'Power2.easeOut',
      duration: 3,
      onComplete() {
        kaiping.value.pause();
      }
    })
  }
})

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