<template>
  <div class="mt-7 flex justify-center">
    <div
      id="container"
      class="rounded-3xl w-11/12 sm:w-[400px] md:w-[94%] xl:w-[1300px] 2xl:w-[1400px] lg:h-[36em] xl:h-[47em] xl:overflow-hidden bg-[#fff]"
    >
      <img src="/power_large.jpg" class="hidden lg:block md:mt-32" alt="" />

      <div
        class="mt-10 grid w-10/12 sm:w-9/12 lg:w-[380px] xl:w-[600px] mx-auto xl:mx-auto xl:-translate-y-[600px] 2xl:-translate-y-[650px] place-item-center place-content-center"
      >
        <span
          class="font-['SF_Pro_Semibold'] xl:mx-auto xl:w-11/12 text-center leading-[47px] font-semibold text-[44px] lg:text-[56px] xl:text-7xl text-[#1d1d1f]"
          >Mac does more. So you can, too.
        </span>
        <p
          class="font-['SF_Pro_Display_Light'] xl:mx-auto xl:w-9/12 2xl:w-10/12 mt-6 text-center font-semibold text-[#1d1d1f] text-[19px] lg:text-[21px]"
        >
          Mac is powerful, capable, and packed with everything you need to bring
          your work to the next level. Take your productivity and creativity
          further with apps for anything you can imagine. Even use apps from
          Microsoft 365 and Adobe Creative Cloud without missing a beat.2 No
          matter who you are, or what you want to do, Mac can make it happen.
        </p>
        <a
          href="#_"
          class="inline-flex text-[17px] font-['SF_Pro_Text'] items-center justify-center mt-10 h-8 w-[220px] mx-auto font-semibold text-white transition duration-200 bg-gray-900 rounded-full hover:bg-gray-800 focus:shadow-outline focus:outline-none"
        >
          More about productivity
        </a>
      </div>
      <div
        class="h-[42em] lg:hidden mt-14 bg-[url('/power_small.jpg')] grid place-content-center place-items-center bg-no-repeat bg-cover bg-center md:bg-[center_top]"
      >
        <p
          class="font-['SF_Pro_Text'] -translate-y-8 font-normal text-[#1d1d1f] text-[12px] text-center"
        >
          Adobe Photosop
        </p>
      </div>
      <p
        class="font-['SF_Pro_Text'] lg:hidden -translate-y-8 md:-translate-y-0 font-normal text-[#1d1d1f] text-[12px] text-center"
      >
        Microsoft Excel
      </p>
    </div>
  </div>
</template>

<style>
@media (max-width: 1023px) {
  #container {
    min-height: 100vh;
  }
}
</style>
