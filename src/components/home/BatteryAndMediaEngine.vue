<template>
  <div class="mt-4 flex justify-center pb-6">
    <div
      class="w-[88%] sm:w-[400px] md:w-11/12 lg:w-[979px] xl:w-[97%] 2xl:w-[1400px] grid gap-6 xl:flex xl:gap-6"
    >
      <div
        id="allday_battery"
        class="h-[32em] md:h-[40em] xl:h-[46em] rounded-3xl xl:w-[32%]"
      >
        <p
          class="p-6 xl:p-10 font-['SF_Pro_Display_Light'] text-[#fff] text-[21px] font-bold"
        >
          All-day battery
        </p>
        <p
          ref="title"
          id="title"
          class="p-6 xl:p-14 md:w-8/12 lg:w-6/12 xl:w-full md:mx-auto text-center leading-[60px] mt-14 xl:mt-20 text-[56px] md:text-7xl font-['SF_Pro_Medium']"
        >
          Up to 20 hours of battery life.¹ Go long.
        </p>
      </div>
      <div
        id="media_engine"
        class="md:h-[30] xl:h-[46em] overflow-hidden xl:overflow-hidden rounded-3xl xl:w-2/3"
      >
        <div class="md:flex md:justify-between md:items-center">
          <p
            class="p-6 xl:p-10 font-['SF_Pro_Display_Light'] text-[#fff] text-[21px] font-semibold"
          >
            Media engine
          </p>
          <p
            class="text-[12px] hidden md:block p-10 font-normal text-[#fff] font-['SF_Pro_Text']"
          >
            Final Cut pro
          </p>
        </div>
        <div
          class="grid md:bg-[url('/medi_engine_medium.png')] xl:bg-none bg-no-repeat lg:h-[30em] bg-right bg-contain gap-3 md:flex md:justify-between xl:gap-3 xl:mt-2"
        >
          <div class="grid p-6 xl:p-10 md:w-5/12 xl:w-[400px]">
            <p
              class="text-[#fff] font-bold leading-[50px] xl:leading-[60px] text-[40px] xl:text-[56px] font-['SF_Pro_Display_Light']"
            >
              A portable editing bay.
            </p>
            <p
              class="font-['SF_Pro_Display_Light'] w-11/12 md:w-full mt-7 font-semibold text-[#fff] text-[19px]"
            >
              The high-performance media engine on M2 supports ProRes encode and
              decode. So you can play and edit up to 11 streams of 4K ProRes
              video and up to 2 streams of 8K ProRes video — including 4K ProRes
              video shot on iPhone 13 Pro.12 And convert projects to ProRes up
              to 3x faster than before.13
            </p>
            <p
              class="text-[12px] md:hidden translate-y-96 font-normal text-[#fff] font-['SF_Pro_Text']"
            >
              Final Cut pro
            </p>
          </div>
          <img
            src="/media_engine_large.png"
            alt="cut_pro"
            class="hidden xl:block h-[40em]"
          />
          <img
            src="../../assets/media_engine_small.png"
            alt=""
            class="h-96 md:hidden translate-x-28"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const title = ref(null);

const showAnimation = () => {
  let top = window.pageYOffset + window.innerHeight;
  let isVisble = top > title.value.offsetTop;

  if (isVisble) {
    title.value.classList.add("animate");
  }
};

onMounted(() => {
  window.addEventListener("scroll", showAnimation);
});

onUnmounted(() => {
  window.removeEventListener("scroll", showAnimation);
});
</script>

<style scoped>
#allday_battery {
  background: linear-gradient(to bottom, #203025 0%, #151516 100%);
}

#title {
  background-image: linear-gradient(to top, white 50%, #4cd265 50%);
  background-size: 100% 200%;
  background-position: 0% 0%;
  background-clip: text;
  color: transparent;
}

#media_engine {
  background: linear-gradient(165deg, #2c4735 0%, #1d243e 60%, #101124 90%);
}

#title.animate {
  animation: changeColor;
  animation-timing-function: ease-out;
  animation-duration: 5s;
}

@keyframes changeColor {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 0% -100%;
  }
}
</style>
