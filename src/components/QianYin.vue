<template>
    <div class="fake-body">
        <div class="container">
            <ul ref="scene" id="scene">
                <li class="layer" data-depth=".2"><img :src="getImg('QianYin/planet1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('QianYin/planet2.png')"></li>
                <li class="layer" data-depth=".2"><img :src="getImg('QianYin/man.png')"></li>
                <li class="layer" data-depth=".5"><img :src="getImg('QianYin/earth.png')"></li>
                <li class="layer" data-depth=".1"><img :src="getImg('QianYin/text.png')"></li>
                <li class="layer" data-depth=".4"><img :src="getImg('QianYin/planet3.png')"></li>
                <li class="layer" data-depth=".8"><img :src="getImg('QianYin/planet4.png')"></li>
                <li class="layer" data-depth="0"><img :src="getImg('QianYin/planet5.png')"></li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import '../js/lib/parallax.js'
import { getImg } from '../js'
const scene = ref<HTMLUListElement>();

onMounted(() => {
    // @ts-ignore
    const parallax = new Parallax(scene.value);
})
</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url(../assets/imgs/QianYin/background.jpg);
    background-attachment: fixed;
}
</style>