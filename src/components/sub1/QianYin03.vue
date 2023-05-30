<template>
    <div class="fake-body">
        <div class="container">
            <ul ref="scene" id="scene">
                <li class="layer" data-depth=".2"><img :src="getImg('QianYin03/云2_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('QianYin03/云3_画板 1.png')"></li>
                <li class="layer" data-depth=".2"><img :src="getImg('QianYin03/云4_画板 1.png')"></li>
                <li class="layer" data-depth=".5"><img :src="getImg('QianYin03/云_画板 1.png')"></li>
                <li class="layer" data-depth=".1"><img :src="getImg('QianYin03/人物1_画板 1.png')"></li>
                <li class="layer" data-depth=".4"><img :src="getImg('QianYin03/人物2_画板 1.png')"></li>
                <li class="layer" data-depth=".8"><img :src="getImg('QianYin03/元素2_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('QianYin03/太湖石_画板 1.png')"></li>
                <li class="layer" data-depth=".3"><img :src="getImg('QianYin03/山_画板 1.png')"></li>
            </ul>
        </div>
        <div class="content-text" style="color: rgb(69, 64, 220)">
            因时行病后虚热，更能饮复茗，必一斛二斗乃饱
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
    background: url(../../assets/imgs/QianYin03/背景图_画板_1.png);
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