<template>
  <div class="mt-4 flex justify-center pb-20">
    <div class="xl:w-[97%] xl:flex xl:gap-6">
      <div id="allday_battery" class="h-[39em] rounded-3xl xl:w-[32%]">
        <p
          class="xl:p-10 font-['SF_Pro_Display_Light'] text-[#fff] text-[21px] font-bold"
        >
          All-day battery
        </p>
        <p
          id="title"
          class="xl:p-14 text-center xl:leading-[60px] xl:mt-20 xl:text-[56px] font-['SF_Pro_Medium']"
        >
          Up to 20 hours of battery life.¹ Go long.
        </p>
      </div>
      <div id="media_engine" class="h-[39em] rounded-3xl xl:w-2/3">
        <p
          class="xl:p-10 font-['SF_Pro_Display_Light'] text-[#fff] text-[21px] font-semibold"
        >
          Media engine
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#allday_battery {
  background: linear-gradient(to bottom, #203025 0%, #151516 100%);
}

#title {
  animation: changeColor;
  animation-timing-function: ease-out;
  animation-duration: 5s;
  background-image: linear-gradient(to top, white 50%, #4cd265 50%);
  background-size: 100% 200%;
  background-position: 0% 0%;
  background-clip: text;
  color: transparent;
}

#media_engine {
  background: linear-gradient(165deg, #2c4735 0%, #1d243e 60%, #101124 90%);
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
