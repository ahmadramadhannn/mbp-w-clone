<template>
  <div class="mt-8 flex justify-center">
    <div
      class="grid gap-5 md:flex xl:gap-5 w-[88%] sm:w-[400px] md:w-11/12 lg:w-[979px] xl:w-[97%] 2xl:w-[1400px]"
    >
      <div
        id="thermal_efficiency"
        class="xl:w-2/3 bg-[#151516] bg-[url('/thermal_static_small.jpg')] xl:bg-[url('/thermal_static.jpg')] bg-no-repeat bg-cover bg-left lg:bg-center lg:bg-cover rounded-3xl h-[45em] md:h-[60em] xl:h-[45em]"
      >
        <div>
          <p
            class="p-6 md:p-8 lg:p-10 text-[#fff] font-['SF_Pro_Display_Light'] font-semibold text-[21px]"
          >
            Thermal efficiency
          </p>
          <div class="p-6 md:p-8 lg:p-10 lg:mt-10">
            <h4
              class="font-['SF_Pro_Display_Light'] w-[95%] xl:w-[300px] leading-[23px] md:leading-[28px] xl:leading-[34px] font-semibold text-[21px] md:text-[24px] lg:text-[28px] text-[#fff]"
            >
              Active cooling sustains blazing‑fast performance.
              <p class="text-[#d2d2d7]">
                Thanks to its advanced thermal system and the efficiency of
                Apple silicon, MacBook Pro can sustain pro levels of
                performance, so you can run CPU‑ and GPU‑intensive tasks for
                hours on end.
              </p>
            </h4>
          </div>
        </div>
      </div>
      <UnifiedMemory />
    </div>
  </div>
</template>

<script setup>
import UnifiedMemory from "./UnifiedMemory.vue";
</script>
