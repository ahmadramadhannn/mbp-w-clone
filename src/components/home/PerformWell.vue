<template>
  <div
    class="mt-8 flex justify-center md:min-h-[45em] xl:h-[46em]"
    id="perfoms_wrapper"
  >
    <div
      class="w-[87%] sm:w-[400px] md:w-11/12 lg:w-[979px] xl:w-[97%] 2xl:w-[1400px] md:min-h-[45em] xl:h-[46em] rounded-3xl"
      id="performs"
    >
      <div class="md:flex xl:gap-4">
        <div class="grid overflow-hidden">
          <p
            class="p-6 xl:p-10 font-semibold text-[#fff] text-[21px] font-['SF_Pro_Display_Light']"
          >
            macOS
          </p>
          <img
            src="/macos_medium.png"
            alt=""
            class="hidden md:block lg:hidden md:-translate-x-40 lg:-translate-y-10 lg:-translate-x-20"
          />
          <img
            src="/macos_large.png"
            class="hidden lg:block xl:-translate-y-32"
            alt=""
          />
          <p
            class="sm:w-7/12 -translate-y-3 xl:-translate-y-24 font-['SF_Pro_Text'] text-[#fff] text-[12px] font-normal text-center"
          >
            Zoom / Microsoft Excel / Adobe InDesign
          </p>
        </div>
        <div
          class="grid gap-5 place-content-center md:w-[300px] lg:w-[400px] xl:w-[480px]"
        >
          <h5
            class="p-6 font-['SF_Pro_Medium'] xl:w-10/12 leading-[50px] xl:leading-[55px] text-[#fff] text-[40px] xl:text-[56px] font-bold"
          >
            Performs well with others.
          </h5>
          <p
            class="p-6 text-[#fff] lg:mt-3 font-['SF_Pro_Display_Light'] font-semibold text-[19px]"
          >
            macOS and M2 work together to bring more speed and responsiveness to
            all your go‑to apps — including Microsoft 365 and your favorite iOS
            apps. Over 10,000 apps and plug‑ins are already optimized for Apple
            silicon. And Rosetta 2 seamlessly translates apps designed for Intel
            processors for use on your MacBook Pro.
          </p>
          <img src="/macos_small.png" class="md:hidden" alt="" />
          <p
            class="sm:w-8/12 md:hidden font-['SF_Pro_Text'] text-[#fff] text-[12px] font-normal text-center"
          >
            Zoom / Microsoft Excel / Adobe InDesign
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  #performs {
    background-image: radial-gradient(
        at 0% 0%,
        rgba(10, 43, 97, 0.5) 0px,
        transparent 50%
      ),
      radial-gradient(at 56% 9%, rgba(10, 43, 97, 0.5) 0px, transparent 50%),
      radial-gradient(at 31% 4%, rgba(10, 43, 97, 0.5) 0px, transparent 50%),
      radial-gradient(at 86% 0%, #0a2a61 0px, transparent 50%),
      radial-gradient(at 61% 81%, rgba(111, 88, 116, 0.23) 0px, transparent 50%),
      radial-gradient(at 94% 50%, rgba(76, 21, 147, 0.22) 0px, transparent 50%),
      radial-gradient(at 84% 100%, rgba(111, 88, 116, 0.7) 0px, transparent 50%),
      radial-gradient(at 0% 100%, #74517b 0px, transparent 50%),
      radial-gradient(at 68% 100%, rgba(75, 59, 78, 0.69) 0px, transparent 50%),
      radial-gradient(
        at 32% 100%,
        rgba(111, 88, 116, 0.51) 0px,
        transparent 50%
      );
  }
}

@media (min-width: 768px) {
  #performs {
    background-image: radial-gradient(
        at 100% 100%,
        rgba(111, 88, 116, 0.7) 0px,
        transparent 50%
      ),
      radial-gradient(at 90% 0%, #0a2961 0px, transparent 50%),
      radial-gradient(at 18% 16%, rgba(58, 3, 130, 0.79) 0px, transparent 50%),
      radial-gradient(at 100% 40%, rgba(76, 21, 147, 0.22) 0px, transparent 50%),
      radial-gradient(at 0% 100%, #74517b 0px, transparent 50%);
  }
}
</style>
