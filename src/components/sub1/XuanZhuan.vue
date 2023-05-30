<template>
    <div ref="fakeBody" class="fake-body xz-wrapper">
        <div class="box">
            <img :src="getImg('XuanZhuan/狮子.png')" alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { getImg } from '../../js';
import '../../js/lib/jquery.ripples-min.js'

const fakeBody = ref<HTMLDivElement>();

onMounted(() => {
    // $('.fake-body').ripples('play');
})
</script>

<style scoped lang="less">
.xz-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../../assets/imgs/XuanZhuan/背景图.png);
    background-size: contain;

    .box {
        width: 800px;
        height: 800px;
        animation: box-rotate 5s linear infinite normal;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @keyframes box-rotate {
        from {
            transform: rotate(0turn);
        }

        to {
            transform: rotate(1turn);
        }
    }
}
</style>