<template>
    <div class="fake-body">
        <div class="container">
            <ul ref="scene" id="scene">
                <li class="layer" data-depth=".2"><img :src="getImg('QianYin/狮子1_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('QianYin/狮子1_画板 1.png')"></li>
                <li class="layer" data-depth=".2"><img :src="getImg('QianYin/狮子3_画板 1.png')"></li>
                <li class="layer" data-depth=".5"><img :src="getImg('QianYin/狮子4_画板 1.png')"></li>
                <li class="layer" data-depth=".1"><img :src="getImg('QianYin/狮子5_画板 1.png')"></li>
                <li class="layer" data-depth=".4"><img :src="getImg('QianYin/狮子6_画板 1.png')"></li>
                <li class="layer" data-depth=".8"><img :src="getImg('QianYin/狮子7_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('QianYin/狮子8_画板 1.png')"></li>
            </ul>
        </div>
        <div class="content-text" style="color: rgb(69, 64, 220)">
            以一斛二斗复茗浇之，此物歙之都尽
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
    background: url(../../assets/imgs/QianYin/背景图_画板_1.png);
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