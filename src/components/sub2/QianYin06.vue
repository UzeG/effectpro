<template>
    <div class="fake-body">
        <div class="container">
            <ul ref="scene" id="scene">
                <li class="layer" data-depth=".2"><img :src="getImg('2QianYin06/云左一_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('2QianYin06/云左二_画板 1.png')"></li>
                <li class="layer" data-depth=".2"><img :src="getImg('2QianYin06/云右三_画板 1.png')"></li>
                <li class="layer" data-depth=".5"><img :src="getImg('2QianYin06/云右四_画板 1.png')"></li>
                <li class="layer" data-depth=".1"><img :src="getImg('2QianYin06/太阳_画板 1.png')"></li>
                <li class="layer" data-depth=".4"><img :src="getImg('2QianYin06/棋盘_画板 1.png')"></li>
                <li class="layer" data-depth=".4"><img :src="getImg('2QianYin06/老翁左_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('2QianYin06/老翁右_画板 1.png')"></li>
            </ul>
        </div>
        <div class="content-text">
            须眉皤然，肌体红润，对弈其间，谈笑风生
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import '../../js/lib/parallax.js'
import { getImg } from '../../js'
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
    background: url(../../assets/imgs/2QianYin06/背景_画板_1.png);
    // background-attachment: fixed;
    background-size: contain;

    ul {
        width: 100%;
        height: 100%;

        li {
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>