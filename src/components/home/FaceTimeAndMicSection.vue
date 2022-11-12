<template>
  <div class="mt-2 xl:mt-12 flex justify-center">
    <div
      class="w-[87%] sm:w-[400px] md:w-11/12 xl:w-[1300px] grid gap-5 md:flex md:gap-4 xl:flex xl:gap-5 2xl:w-[1400px]"
    >
      <div
        class="md:w-[50%] xl:w-[60%] 2xl:w-[59%] p-6 xl:p-10 bg-[#151516] h-[28em] md:h-[38em] lg:h-[42em] xl:h-[40em] 2xl:h-[44em] rounded-2xl"
      >
        <p
          class="text-[#fff] font-['SF_Pro_Display_Light'] text-[19px] md:text-[21px] font-semibold"
        >
          FaceTime HD camera
        </p>
        <p
          class="text-[#fff] text-[24px] md:text-[28px] xl:text-[32px] font-semibold font-['SF_Pro_Semibold'] mt-12 leading-[30px] xl:leading-[40px] w-11/12"
        >
          With the advanced image signal processor on M2, you’ll look your best
          on video calls.
        </p>
        <img
          src="../../assets/facetime__de08jpatpuwm_small.png"
          class="mt-6 md:hidden"
          alt=""
        />
        <img
          src="../../assets/facetime__de08jpatpuwm_medium_2x.png"
          class="mt-6 hidden md:block xl:hidden"
          alt=""
        />
        <img
          src="../../assets/facetime__de08jpatpuwm_large.png"
          class="hidden xl:block 2xl:h-96 2xl:mx-auto mt-10"
          alt=""
        />
      </div>
      <div
        class="md:w-[50%] xl:w-[40%] 2xl:w-[41%] bg-[#151516] h-[31em] sm:h-[33em] md:h-[38em] lg:h-[42em] xl:h-[40em] 2xl:h-[44em] rounded-2xl p-6 xl:p-10"
      >
        <p
          class="text-[#fff] font-['SF_Pro_Display_Light'] font-semibold text-[19px] md:text-[21px]"
        >
          Three-mic array
        </p>
        <div class="xl:w-11/12">
          <p
            class="mt-12 xl:mt-12 text-[24px] md:text-[28px] xl:text-[32px] leading-[30px] xl:leading-[40px] font-semibold text-[#fff] font-['SF_Pro_Display_Light'] lg:w-10/12 xl:w-11/12"
          >
            Studio quality. Without the studio.
            <span class="text-[#a2a1a7]"
              >An improved signal‑to‑noise ratio rivals that of
              professional‑grade microphones.</span
            >
          </p>
          <div class="mt-12 flex justify-center">
            <video
              autoplay
              playsinline
              muted
              :class="hideVideo ? 'hidden' : 'block'"
              @ended="showImage"
              src="../../assets/mic.mp4"
            ></video>
            <img
              src="../../assets/microphones_endframe__bqtiqn957ak2_large.jpg"
              alt=" banner-image"
              :class="hideVideo ? 'block' : 'hidden'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const hideVideo = ref(false);

const showImage = () => {
  hideVideo.value = !hideVideo.value;
};
</script>
