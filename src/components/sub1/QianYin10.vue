<template>
    <div class="fake-body">
        <div class="container">
            <ul ref="scene" id="scene">
                <li class="layer" data-depth=".2"><img :src="getImg('QianYin10/橘1_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('QianYin10/橘2_画板 1.png')"></li>
                <li class="layer" data-depth=".2"><img :src="getImg('QianYin10/橘3_画板 1.png')"></li>
                <li class="layer" data-depth=".5"><img :src="getImg('QianYin10/橘4_画板 1.png')"></li>
                <li class="layer" data-depth=".1"><img :src="getImg('QianYin10/橘5_画板 1.png')"></li>
                <li class="layer" data-depth=".4"><img :src="getImg('QianYin10/橘6_画板 1.png')"></li>
                <li class="layer" data-depth=".9"><img :src="getImg('QianYin10/狮子_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('QianYin10/门环_画板 1.png')"></li>
            </ul>
        </div>
        <div class="content-text" style="color: rgb(69, 64, 220)">
            问之：“此何病？“答云：“此病名斛茗瘕
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
    background: url(../../assets/imgs/QianYin10/茶10_画板_1.png);
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