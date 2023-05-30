<template>
  <div ref="scrollable" class="app-content">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, Ref, watch } from 'vue'
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  font-size: 16px;
}

#app {
  height: 100%;
}

.app-content {
  overflow: auto;
  width: 100%;
  height: 100%;
}
</style>