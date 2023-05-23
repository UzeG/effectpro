<template>
    <div ref="fakeBody" class="fake-body xq-wrapper">
        <div class="container">
            <div ref="artboard" class="artboard" @click="handleClick">
                <div class="background">
                    <div class="mountain-left"></div>
                    <div class="mountain-right"></div>
                    <div class="sun-wrap">
                        <div class="sun-main"></div>
                        <div class="sun-1"></div>
                        <div class="sun-2"></div>
                    </div>
                    <div class="small-planet"></div>
                    <div class="big-planet"></div>
                    <div class="cloud-1"></div>
                    <div class="cloud-2"></div>
                    <div class="cloud-3"></div>
                    <div class="shooting-star"></div>


                    <div class="star star1"></div>
                    <div class="star star2"></div>
                    <div class="star star3"></div>
                    <div class="star star4"></div>
                    <div class="star star5"></div>
                    <div class="star star6"></div>
                    <div class="star star7"></div>
                    <div class="star star8"></div>
                    <div class="star star9"></div>
                    <div class="star star10"></div>
                    <div class="star star11"></div>
                    <div class="star star12"></div>
                    <div class="star star13"></div>
                    <div class="star star14"></div>
                    <div class="star star15"></div>
                    <div class="star star16"></div>
                    <div class="star star17"></div>
                    <div class="star star18"></div>
                    <div class="star star19"></div>
                    <div class="star star20"></div>
                    <div class="star star21"></div>
                    <div class="star star22"></div>
                    <div class="star star23"></div>
                    <div class="star star24"></div>
                    <div class="star star25"></div>
                    <div class="star star26"></div>
                    <div class="star star27"></div>
                    <div class="star star28"></div>
                    <div class="star star29"></div>
                    <div class="star star30"></div>
                    <div class="star star31"></div>
                    <div class="star star32"></div>
                    <div class="star star33"></div>
                    <div class="star star34"></div>
                    <div class="star star35"></div>
                    <div class="star star36"></div>
                    <div class="star star37"></div>
                    <div class="star star38"></div>
                    <div class="star star39"></div>
                    <div class="star star40"></div>
                </div>
            </div>
        </div>



        <svg style="width:0;" viewBox="-1 0 402 101">
            <defs>
                <clipPath id="cloud-1">
                    <path
                        d="M398.948594,20 C398.217953,9.37848747 389.789697,1 379.5,1 C371.018151,1 363.801112,6.69300429 361.11771,14.6425542 C358.544144,12.9551727 355.611794,12 352.5,12 C342.521441,12 334.388079,21.821908 334.013482,34.1137212 C331.663831,33.3925022 329.134804,33 326.5,33 C316.925343,33 308.747514,38.1831266 305.498296,45.4885005 C300.518345,43.2875708 294.492237,42 288,42 C274.10464,42 262.344569,47.8982344 258.406688,56.0257358 C253.595378,52.2696962 247.339253,50 240.5,50 C235.615537,50 231.028501,51.157668 227.052779,53.1876514 C225.044487,51.2265694 222.179808,50 219,50 C216.191593,50 213.629,50.9567766 211.685113,52.5313361 C208.331988,50.9132626 204.529602,50 200.5,50 C196.216212,50 192.189208,51.0321134 188.685762,52.8459007 C186.702881,51.0851129 183.990834,50 181,50 C177.820192,50 174.955513,51.2265694 172.947224,53.1876529 C168.971499,51.157668 164.384463,50 159.5,50 C152.660747,50 146.404622,52.2696962 141.593312,56.0257358 C137.655431,47.8982344 125.89536,42 112,42 C105.507763,42 99.481655,43.2875708 94.501704,45.4885005 C91.2524864,38.1831266 83.0746571,33 73.5,33 C70.8651956,33 68.3361687,33.3925022 65.9865178,34.1137212 C65.6119213,21.821908 57.4785595,12 47.5,12 C44.3882058,12 41.4558555,12.9551727 38.8822899,14.6425542 C36.198888,6.69300429 28.9818491,1 20.5,1 C10.2103027,1 1.78204736,9.37848747 1.05140566,20 L0,20 L0,64 L0,100 L400,100 L400,68 L400,20 L398.948594,20 Z"
                        id="Combined-Shape" stroke="#979797" stroke-width="1" fill="#D8D8D8" fill-rule="evenodd"></path>
                </clipPath>

                <clipPath id="cloud-2">
                    <path
                        d="M398.99198,21 C398.63585,9.90917315 386.463617,1 371.5,1 C361.186833,1 352.199625,5.23202642 347.492988,11.4935514 C345.009233,10.5284344 342.314986,10 339.5,10 C327.73063,10 318.071844,19.2372999 317.083346,31.0064263 C316.889497,31.0021507 316.695038,31 316.5,31 C309.47095,31 303.194717,33.7934355 299.068681,38.1692443 C294.019294,36.1506713 288.197775,35 282,35 C275.666142,35 269.725243,36.2017563 264.599834,38.303461 C260.334684,31.5372744 252.481767,27 243.5,27 C236.253879,27 229.742482,29.95313 225.256951,34.6472977 C219.401338,28.7761045 210.265121,25 200,25 C189.734879,25 180.598662,28.7761045 174.743049,34.6472977 C170.257518,29.95313 163.746121,27 156.5,27 C147.518233,27 139.665316,31.5372744 135.40016,38.3034585 C130.274757,36.2017563 124.333858,35 118,35 C111.802225,35 105.980706,36.1506713 100.931319,38.1692443 C96.8052829,33.7934355 90.5290502,31 83.5,31 C83.3049616,31 83.1105029,31.0021507 82.9166536,31.0064263 C81.9281556,19.2372999 72.2693703,10 60.5,10 C57.685014,10 54.9907674,10.5284344 52.5070141,11.4935547 C47.8003745,5.23202642 38.8131671,1 28.5,1 C13.5363835,1 1.36414956,9.90917315 1.00801953,21 L0,21 L0,100 L70,100 L400,100 L400,54 L400,21 L398.99198,21 Z"
                        id="Combined-Shape" stroke="#979797" stroke-width="1" fill="#D8D8D8" fill-rule="evenodd"></path>
                </clipPath>
            </defs>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const fakeBody = ref<HTMLDivElement>();
const artboard = ref<HTMLDivElement>();
const handleClick = () => {
    fakeBody.value?.classList.toggle('active');
}
</script>

<style scoped lang="less">
.xq-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 400px;
    height: 400px;
    margin: 30px auto;
    position: relative;
    min-width: 400px;
    min-height: 400px;
}

.artboard {
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 50%;
    box-shadow: 0 15px 100px rgba(237, 57, 41, 0.7), 0 3px 35px rgba(0, 0, 0, 0.5);
    transform: scale(0.15);
    transition: transform 0.6s, box-shadow 0.2s;
}

.artboard:hover {
    box-shadow: 0 40px 150px rgba(237, 57, 41, 0.5), 0 10px 100px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.artboard:active {
    box-shadow: 0 15px 10px rgba(237, 57, 41, 0.5), 0 3px 15px rgba(0, 0, 0, 0.3);
}

.background {
    position: relative;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    overflow: hidden;
    background: linear-gradient(200deg, #5D2B36 20%, #F6BC72 80%);
    border-radius: 50%;
    z-index: 10;
    transform: scale(0);
    transition: transform 0.9s;
}

.mountain-left {
    background-image: linear-gradient(92deg, rgba(0, 0, 0, 0) 94%, rgba(78, 20, 8, 0.4) 95%), linear-gradient(0deg, #922F4E 65%, #E1654D 90%, #F8AE6D);
    border-radius: 30%;
    width: 120%;
    height: 100%;
    position: absolute;
    transform: skewX(10deg) rotateX(50deg) rotateZ(-40deg);
    top: 100%;
    right: 25%;
    z-index: 15;
    transition: top 0.9s;
}

.mountain-right {
    background-image: linear-gradient(-3deg, rgba(0, 0, 0, 0) 93%, rgba(78, 20, 8, 0.4) 94%), linear-gradient(40deg, #A53750 70%, #E1654D 85%, #F8AE6D);
    border-radius: 25%;
    width: 150%;
    height: 120%;
    transform: skewX(40deg) rotateX(50deg) rotateZ(-40deg);
    position: absolute;
    top: 100%;
    left: 30%;
    z-index: 16;
    transition: top 0.7s;
}

.sun-wrap {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 50%;
    height: 50%;
    z-index: 6;
}

.sun-main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    border-radius: 50%;
    z-index: 7;
    transform: scale(0);
    transition: transform 0.7s;
}

.sun-1 {
    position: absolute;
    top: -5%;
    bottom: -5%;
    left: -5%;
    right: -5%;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    z-index: 6;
    -webkit-animation: growshrink 3s infinite;
    animation: growshrink 3s infinite;
    opacity: 0;
    transition: opacity 0.7s;
}

.sun-2 {
    position: absolute;
    top: -11%;
    bottom: -11%;
    left: -11%;
    right: -11%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    z-index: 5;
    -webkit-animation: growshrink 2.8s infinite;
    animation: growshrink 2.8s infinite;
    opacity: 0;
    transition: opacity 0.7s;
}

.small-planet {
    position: absolute;
    top: 17%;
    left: -50%;
    background: linear-gradient(to top left, #363D4D 0%, #363D4D 20%, #386E8A 32%, #386E8A 40%, #4C9FAF 52%, #4C9FAF 60%, #71BEAC 68%, #71BEAC 74%, #ABE084 88%, #ABE084 100%);
    width: 10%;
    height: 10%;
    border-radius: 50%;
    z-index: 3;
    -webkit-animation: wobble-1 2.5s infinite;
    animation: wobble-1 2.5s infinite;
    transition: left 0.7s;
}

.big-planet {
    position: absolute;
    top: 21%;
    right: -50%;
    background: linear-gradient(to top left, #5D2D39 0%, #5D2D39 25%, #B7403C 36%, #B7403C 42%, #EE3A2B 52%, #EE3A2B 56%, #FFC77D 80%, #FFC77D 100%);
    width: 19%;
    height: 19%;
    border-radius: 50%;
    z-index: 4;
    -webkit-animation: wobble-2 2.3s infinite;
    animation: wobble-2 2.3s infinite;
    transition: right 0.7s;
}

.star {
    position: absolute;
    top: -10%;
    left: 0;
    right: 0;
    background: white;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    z-index: 0;
}

.cloud-1 {
    z-index: 3;
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
    width: 100%;
    height: 80px;
    -webkit-clip-path: url(#cloud-1);
    clip-path: url(#cloud-1);
    -webkit-animation: updown 2s infinite;
    animation: updown 2s infinite;
    opacity: 0;
    transition: opacity 0.7s;
}

.cloud-2 {
    z-index: 2;
    position: absolute;
    top: 24%;
    left: 0%;
    right: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
    width: 100%;
    height: 80px;
    -webkit-clip-path: url(#cloud-1);
    clip-path: url(#cloud-1);
    -webkit-animation: updown 2.2s infinite;
    animation: updown 2.2s infinite;
    opacity: 0;
    transition: opacity 0.7s;
}

.cloud-3 {
    z-index: 1;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
    width: 100%;
    height: 80px;
    -webkit-clip-path: url(#cloud-2);
    clip-path: url(#cloud-2);
    -webkit-animation: updown 1.8s infinite;
    animation: updown 1.8s infinite;
    opacity: 0;
    transition: opacity 0.7s;
}

.shooting-star {
    position: absolute;
    top: -10%;
    right: 60%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    width: 100px;
    height: 3px;
    border-radius: 50%;
    z-index: 0;
    box-shadow: 0px 0px 1px rgba(255, 255, 255, 0.6);
    -webkit-animation: shoot 6s infinite backwards;
    animation: shoot 6s infinite backwards;
}

.active .artboard {
    box-shadow: 0 15px 40px rgba(237, 57, 41, 0.5), 0 3px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1);
}

.active .artboard:hover {
    box-shadow: 0 20px 50px rgba(237, 57, 41, 0.7), 0 5px 20px rgba(0, 0, 0, 0.4);
}

.active .artboard:active {
    box-shadow: 0 15px 10px rgba(237, 57, 41, 0.5), 0 3px 15px rgba(0, 0, 0, 0.3);
}

.active .background {
    transform: scale(1);
}

.active .mountain-left {
    top: 52%;
    transition: top 1.3s 0.9s;
}

.active .mountain-right {
    top: 48%;
    transition: top 1.5s 1.2s;
}

.active .sun-main {
    transform: scale(1);
    transition: transform 1s 1.8s;
}

.active .sun-1 {
    opacity: 1;
    transition: opacity 1.5s 2s;
}

.active .sun-2 {
    opacity: 1;
    transition: opacity 1.6s 2.2s;
}

.active .small-planet {
    left: 17%;
    transition: left 1.2s 1.5s;
}

.active .big-planet {
    right: 8%;
    transition: right 1s 1.9s;
}

.active .star {
    top: 0;
}

.active .star1 {
    width: 5px;
    height: 5px;
    top: 18%;
    left: 40%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 1.3s 2.2s;
}

.active .star2 {
    width: 1px;
    height: 1px;
    top: 18%;
    left: 81%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 0.8s 1.9s;
}

.active .star3 {
    width: 4px;
    height: 4px;
    top: 6%;
    left: 41%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 8s infinite;
    animation: explode 8s infinite;
    transition: top 0.6s 2.1s;
}

.active .star4 {
    width: 2px;
    height: 2px;
    top: 23%;
    left: 48%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 1.4s 1.8s;
}

.active .star5 {
    width: 5px;
    height: 5px;
    top: 11%;
    left: 5%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 1s 2.1s;
}

.active .star6 {
    width: 3px;
    height: 3px;
    top: 21%;
    left: 90%;
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 0.8s 1.9s;
}

.active .star7 {
    width: 3px;
    height: 3px;
    top: 22%;
    left: 90%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 1.2s 2s;
}

.active .star8 {
    width: 4px;
    height: 4px;
    top: 20%;
    left: 77%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 0.5s 1.9s;
}

.active .star9 {
    width: 1px;
    height: 1px;
    top: 2%;
    left: 96%;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 0.8s 1.6s;
}

.active .star10 {
    width: 2px;
    height: 2px;
    top: 19%;
    left: 21%;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 1.4s 2.1s;
}

.active .star11 {
    width: 1px;
    height: 1px;
    top: 11%;
    left: 86%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 0.9s 2s;
}

.active .star12 {
    width: 2px;
    height: 2px;
    top: 9%;
    left: 16%;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 0.9s 1.7s;
}

.active .star13 {
    width: 3px;
    height: 3px;
    top: 20%;
    left: 58%;
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 1.3s 2s;
}

.active .star14 {
    width: 6px;
    height: 6px;
    top: 7%;
    left: 87%;
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 0.5s 1.9s;
}

.active .star15 {
    width: 2px;
    height: 2px;
    top: 5%;
    left: 2%;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 0.5s 2s;
}

.active .star16 {
    width: 6px;
    height: 6px;
    top: 4%;
    left: 63%;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 1s 1.9s;
}

.active .star17 {
    width: 2px;
    height: 2px;
    top: 15%;
    left: 92%;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 0.9s 1.6s;
}

.active .star18 {
    width: 2px;
    height: 2px;
    top: 1%;
    left: 90%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 1.4s 2.2s;
}

.active .star19 {
    width: 6px;
    height: 6px;
    top: 7%;
    left: 62%;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 1.4s 2.5s;
}

.active .star20 {
    width: 5px;
    height: 5px;
    top: 10%;
    left: 93%;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 0.6s 2s;
}

.active .star21 {
    width: 3px;
    height: 3px;
    top: 3%;
    left: 22%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 0.7s 1.9s;
}

.active .star22 {
    width: 3px;
    height: 3px;
    top: 8%;
    left: 33%;
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 0.8s 2.1s;
}

.active .star23 {
    width: 5px;
    height: 5px;
    top: 24%;
    left: 45%;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 0.6s 2s;
}

.active .star24 {
    width: 1px;
    height: 1px;
    top: 15%;
    left: 40%;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 10s infinite;
    animation: explode 10s infinite;
    transition: top 0.6s 2.5s;
}

.active .star25 {
    width: 1px;
    height: 1px;
    top: 24%;
    left: 78%;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 0.6s 2.3s;
}

.active .star26 {
    width: 2px;
    height: 2px;
    top: 24%;
    left: 56%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 8s infinite;
    animation: explode 8s infinite;
    transition: top 1s 1.8s;
}

.active .star27 {
    width: 4px;
    height: 4px;
    top: 14%;
    left: 81%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 1.2s 2.4s;
}

.active .star28 {
    width: 5px;
    height: 5px;
    top: 4%;
    left: 82%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 8s infinite;
    animation: explode 8s infinite;
    transition: top 0.7s 2.2s;
}

.active .star29 {
    width: 2px;
    height: 2px;
    top: 22%;
    left: 18%;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 0.9s 2.2s;
}

.active .star30 {
    width: 3px;
    height: 3px;
    top: 5%;
    left: 71%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 1.1s 1.9s;
}

.active .star31 {
    width: 5px;
    height: 5px;
    top: 18%;
    left: 6%;
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 8s infinite;
    animation: explode 8s infinite;
    transition: top 1.4s 1.9s;
}

.active .star32 {
    width: 3px;
    height: 3px;
    top: 6%;
    left: 98%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 0.8s 1.6s;
}

.active .star33 {
    width: 2px;
    height: 2px;
    top: 19%;
    left: 16%;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 1.3s 2s;
}

.active .star34 {
    width: 5px;
    height: 5px;
    top: 9%;
    left: 70%;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 10s infinite;
    animation: explode 10s infinite;
    transition: top 0.7s 2.4s;
}

.active .star35 {
    width: 4px;
    height: 4px;
    top: 25%;
    left: 35%;
    box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 9s infinite;
    animation: explode 9s infinite;
    transition: top 0.6s 2.1s;
}

.active .star36 {
    width: 4px;
    height: 4px;
    top: 12%;
    left: 1%;
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 0.7s 2.3s;
}

.active .star37 {
    width: 4px;
    height: 4px;
    top: 14%;
    left: 5%;
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 1.4s 2.2s;
}

.active .star38 {
    width: 3px;
    height: 3px;
    top: 8%;
    left: 99%;
    box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 6s infinite;
    animation: explode 6s infinite;
    transition: top 0.8s 1.6s;
}

.active .star39 {
    width: 1px;
    height: 1px;
    top: 11%;
    left: 32%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 7s infinite;
    animation: explode 7s infinite;
    transition: top 1.4s 1.6s;
}

.active .star40 {
    width: 3px;
    height: 3px;
    top: 2%;
    left: 18%;
    box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6);
    -webkit-animation: explode 10s infinite;
    animation: explode 10s infinite;
    transition: top 1.3s 2.5s;
}

.active .cloud-1 {
    opacity: 1;
    transition: opacity 1.4s 1.5s;
}

.active .cloud-2 {
    opacity: 1;
    transition: opacity 1.4s 1.7s;
}

.active .cloud-3 {
    opacity: 1;
    transition: opacity 1.4s 1.9s;
}

@-webkit-keyframes wobble-1 {
    0% {
        transform: translate3d(0, 0, 0);
    }

    25% {
        transform: translate3d(-1px, 1px, 0);
    }

    75% {
        transform: translate3d(1px, -1px, 0);
    }

    100% {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes wobble-1 {
    0% {
        transform: translate3d(0, 0, 0);
    }

    25% {
        transform: translate3d(-1px, 1px, 0);
    }

    75% {
        transform: translate3d(1px, -1px, 0);
    }

    100% {
        transform: translate3d(0, 0, 0);
    }
}

@-webkit-keyframes wobble-2 {
    0% {
        transform: translate3d(0, 0, 0);
    }

    25% {
        transform: translate3d(-1px, -1px, 0);
    }

    75% {
        transform: translate3d(1px, 1px, 0);
    }

    100% {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes wobble-2 {
    0% {
        transform: translate3d(0, 0, 0);
    }

    25% {
        transform: translate3d(-1px, -1px, 0);
    }

    75% {
        transform: translate3d(1px, 1px, 0);
    }

    100% {
        transform: translate3d(0, 0, 0);
    }
}

@-webkit-keyframes growshrink {
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.01);
    }

    75% {
        transform: scale(0.99);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes growshrink {
    0% {
        transform: scale(1);
    }

    25% {
        transform: scale(1.01);
    }

    75% {
        transform: scale(0.99);
    }

    100% {
        transform: scale(1);
    }
}

@-webkit-keyframes explode {
    0% {
        transform: scale(1);
    }

    40% {
        transform: scale(1);
    }

    50% {
        transform: scale(2);
    }

    60% {
        transform: scale(1);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes explode {
    0% {
        transform: scale(1);
    }

    40% {
        transform: scale(1);
    }

    50% {
        transform: scale(2);
    }

    60% {
        transform: scale(1);
    }

    100% {
        transform: scale(1);
    }
}

@-webkit-keyframes updown {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-1px);
    }

    75% {
        transform: translateY(1px);
    }

    100% {
        transform: translateY(0);
    }
}

@keyframes updown {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(-1px);
    }

    75% {
        transform: translateY(1px);
    }

    100% {
        transform: translateY(0);
    }
}

@-webkit-keyframes shoot {
    40% {
        transform: rotate(30deg) translateX(0);
    }

    60% {
        transform: rotate(30deg) translateX(400%);
    }
}

@keyframes shoot {
    40% {
        transform: rotate(30deg) translateX(0);
    }

    60% {
        transform: rotate(30deg) translateX(400%);
    }
}</style>