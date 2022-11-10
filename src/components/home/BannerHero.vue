<template>
  <div id="banner" class="grid place-content-center mt-14">
    <video
      autoplay
      playsinline
      muted
      :class="hideVideo ? 'hidden' : 'block'"
      src="../../assets/large.mp4"
      @ended="showImage"
    ></video>
    <img
      src="../../assets/banner-hero.jpg"
      alt=" banner-image"
      :class="hideVideo ? 'block' : 'hidden'"
    />
    <div
      class="lg:-translate-y-20 xl:-translate-y-32 grid place-content-center text-center w-10/12 md:w-[670px] xl:w-[900px] mx-auto"
    >
      <span
        class="text-[#f5f5f7] text-center text-[28px] md:text-[32px] xl:text-[40px] font-semibold"
        >MacBook Pro</span
      >
      <h1
        id="pro"
        class="text-[48px] md:text-[80px] xl:text-[96px] font-['SF_Pro_Medium'] bg-clip-text font-bold text-[#d2d2d7]"
      >
        Pro anywhere.
      </h1>
      <p
        id="desc"
        class="font-['SF_Pro_Medium'] leading-[33px] xl:leading-[40px] text-[24px] md:text-[28px] xl:text-[32px] font-medium text-[#d2d2d7]"
      >
        The new M2 chip makes the 13‑inch MacBook Pro more capable than ever.
        The same compact design supports up to 20 hours of battery life1 and an
        active cooling system to sustain enhanced performance. Featuring a
        brilliant Retina display, a FaceTime HD camera, and studio‑quality mics,
        it’s our most portable pro laptop.
      </p>
      <div class="mt-14 grid place-content-center">
        <span
          id="supercharger"
          class="text-[28px] xl:text-[40px] font-medium text-[#d2d2d7] font-['SF_Pro_Medium'] flex flex-col justify-center md:flex md:flex-row items-center gap-2"
        >
          Supercharged by
          <img src="../../assets/m2_logo.jpg" alt="" />
        </span>
      </div>
      <div class="md:flex mt-12 gap-5 items-center justify-center">
        <p
          class="font-['SF_Pro_Medium'] text-[#f5f5f7] font-normal text-[21px] md:text-[24px] lg:text-[28px]"
        >
          From $1299
        </p>
        <div class="hidden md:block vl"></div>
        <p
          class="text-[#fff] font-normal font-['SF_Pro_Medium'] text-[21px] md:text-[24px] lg:text-[28px] hover:underline"
        >
          Watch the event >
        </p>
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

<style scoped>
#pro {
  background-image: radial-gradient(#eff1ff, #000);
  background-size: 100% 200%;
  background-position: 50% 100%;

  -webkit-text-fill-color: transparent;
}

.vl {
  border-left: 2px solid white;
  height: 30px;
}
</style>
