<template>
    <div class="fake-body">
        <div class="container">
            <ul ref="scene" id="scene">
                <li class="layer" data-depth=".9"><img :src="getImg('2QianYin01/蝴蝶_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('2QianYin01/橘1_画板 1.png')"></li>
                <li class="layer" data-depth=".2"><img :src="getImg('2QianYin01/橘2_画板 1.png')"></li>
                <li class="layer" data-depth=".5"><img :src="getImg('2QianYin01/橘3_画板 1.png')"></li>
                <li class="layer" data-depth=".4"><img :src="getImg('2QianYin01/橘4_画板 1.png')"></li>
                <li class="layer" data-depth=".6"><img :src="getImg('2QianYin01/橘5_画板 1.png')"></li>
                <li class="layer" data-depth=".8"><img :src="getImg('2QianYin01/橘6_画板 1.png')"></li>
                <li class="layer" data-depth="0.05"><img :src="getImg('2QianYin01/橘7_画板 1.png')"></li>
                <li class="layer" data-depth=".4"><img :src="getImg('2QianYin01/橘8_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('2QianYin01/橘9_画板 1.png')"></li>
                <li class="layer" data-depth="0.1"><img :src="getImg('2QianYin01/橘10_画板 1.png')"></li>
                <li class="layer" data-depth="0.08"><img :src="getImg('2QianYin01/橘11_画板 1.png')"></li>
                <li class="layer" data-depth=".9"><img :src="getImg('2QianYin01/橘12_画板 1.png')"></li>
                <li class="layer" data-depth=".5"><img :src="getImg('2QianYin01/橘13_画板 1.png')"></li>
                <li class="layer" data-depth=".8"><img :src="getImg('2QianYin01/橘14_画板 1.png')"></li>
                <li class="layer" data-depth=".2"><img :src="getImg('2QianYin01/橘15_画板 1.png')"></li>
                <li class="layer" data-depth=".7"><img :src="getImg('2QianYin01/橘16_画板 1.png')"></li>
                <li class="layer" data-depth=".9"><img :src="getImg('2QianYin01/橘17_画板 1.png')"></li>
                <li class="layer" data-depth="0.2"><img :src="getImg('2QianYin01/橘18_画板 1.png')"></li>
                <li class="layer" data-depth="0.15"><img :src="getImg('2QianYin01/橘19_画板 1.png')"></li>
            </ul>
        </div>
        <div class="content-text">
            蝶引橘旋而落
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
    background: url(../../assets/imgs/2QianYin01/背景图.png);
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