<template>
    <div ref="fakeBody" @mousemove="handleMousemove($event)" class="fake-body sp-wrapper">
        <section class="section-container">
            <h1>两叟对赌</h1>
            <span class="hover-btn btn1">
                <!-- <svg t="1683430020791" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="2385" width="32" height="32">
                    <path
                        d="M96 416h832c0.32 0 0.576-0.192 0.896-0.192a30.656 30.656 0 0 0 30.976-30.976c-0.064-0.256 0.128-0.512 0.128-0.832a31.424 31.424 0 0 0-14.912-26.368l-188.48-188.48a30.72 30.72 0 1 0-43.456 43.456L852.544 352H96a32 32 0 0 0 0 64z m832 192H96c-0.32 0-0.576 0.192-0.896 0.192a30.528 30.528 0 0 0-30.976 30.976c0.064 0.256-0.128 0.512-0.128 0.832 0 11.264 6.144 20.672 14.912 26.368l188.48 188.48a30.72 30.72 0 1 0 43.456-43.456L171.456 672H928a32 32 0 0 0 0-64z"
                        p-id="2386"></path>
                </svg> -->
            </span>
        </section>

        <section ref="overlay" class="overlay section-container btn2">
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一叟曰：“君输我海龙神第七女发，智琼额黄，绛台山霞实散，阿母疗髓凝酒，后日於青城草堂还我耳。”</h1>
            <span @click="handleClick" ref="btn2" class="hover-btn2 btn2">
                <!-- <svg t="1683430020791" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="2385" width="32" height="32">
                    <path
                        d="M96 416h832c0.32 0 0.576-0.192 0.896-0.192a30.656 30.656 0 0 0 30.976-30.976c-0.064-0.256 0.128-0.512 0.128-0.832a31.424 31.424 0 0 0-14.912-26.368l-188.48-188.48a30.72 30.72 0 1 0-43.456 43.456L852.544 352H96a32 32 0 0 0 0 64z m832 192H96c-0.32 0-0.576 0.192-0.896 0.192a30.528 30.528 0 0 0-30.976 30.976c0.064 0.256-0.128 0.512-0.128 0.832 0 11.264 6.144 20.672 14.912 26.368l188.48 188.48a30.72 30.72 0 1 0 43.456-43.456L171.456 672H928a32 32 0 0 0 0-64z"
                        p-id="2386" fill="#e6e6e6"></path>
                </svg> -->
                <img :src="getImg('2SpotLight/btn2.png')" alt="">
            </span>
        </section>
    </div>
</template>

<script setup lang="ts">
import { ref, Ref, reactive } from 'vue'
import { gsap } from 'gsap'
import { getImg } from '../../js';

const overlay = ref<HTMLElement>() as Ref<HTMLElement>;
const btn2 = ref<HTMLSpanElement>() as Ref<HTMLSpanElement>;
const fakeBody = ref<HTMLDivElement>() as Ref<HTMLDivElement>;

const handleMousemove = (e: MouseEvent) => {
    const rect = fakeBody.value.getBoundingClientRect();

    const { clientX, clientY } = e;

    const x = Math.round((clientX / fakeBody.value.clientWidth) * 100);
    const y = Math.round(((clientY - rect.top) / fakeBody.value.clientHeight) * 100);
    gsap.to(overlay.value, {
        '--x': `${x}%`,
        '--y': `${y}%`,
        duration: .3,
        ease: 'sine.out'
    })
}

const handleClick = () => {
    if (overlay.value.classList.contains('is-open')) {
        overlay.value.classList.remove('is-open')
        setTimeout(() => {
            overlay.value.style.transition = 'clip-path .2s';
        }, 1300);
    } else {
        overlay.value.style.transition = 'clip-path 1.3s';
        overlay.value.classList.add('is-open');
    }
}

</script>

<style scoped lang="less">
.sp-wrapper {
    width: 100%;
    height: 100%;
    font-family: 'Courier New', Courier, monospace;
    overflow: hidden;
    position: relative;
}

section {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
        font-size: 3rem;
        color: #fff;
        font-family: 'Content-Text';
    }
}

section:nth-child(2) {
    h1 {
        width: 1000px;
        line-height: 80px;
    }
}

.overlay {
    background-color: #000;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    --x: 50%;
    --y: 50%;

    clip-path: circle(100px at var(--x) var(--y));
    // clip-path: circle(100px at 0 100px);
    transition: clip-path .2s;

    &.is-open {
        clip-path: circle(200% at var(--x) var(--y));
        transition: clip-path 1.3s;
        transition-timing-function: cubic-bezier(1, -.01, .01, .99)
    }
}

span {
    // width: 60px;
    // height: 60px;
    // border-radius: 50%;
    // border: 1px solid #666;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 50px;
    right: 50px;

    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 50%;

    &.btn2 {
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .25s;

        img {
            object-fit: contain;
        }

        &:hover {
            background-color: rgba(0, 0, 0, .2);
        }
    }
}

svg {
    margin: 1em;
}

.section-container {
    background-size: contain;
}

.section-container:nth-child(1) {
    background-image: url(../../assets/imgs/2SpotLight/对赌上层.png);
}

.section-container:nth-child(2) {
    background-image: url(../../assets/imgs/2SpotLight/对赌底层.png);
}
</style>