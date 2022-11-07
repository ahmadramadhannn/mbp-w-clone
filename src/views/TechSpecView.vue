<template>
  <div class="flex justify-center">
    <div
      class="mt-10 p-2 md:mt-20 lg:mt-24 flex flex-col md:gap-10 lg:gap-14 w-11/12 md:w-[700px] xl:w-[990px]"
    >
      <SectionFinish />
      <PriceSection />
      <ChipSection />
      <DisplaySection />
      <BatterySpecSection />
    </div>
  </div>
</template>

<script setup>
import SectionFinish from "../components/techSpecs/SectionFinish.vue";
import PriceSection from "../components/techSpecs/PriceSection.vue";
import ChipSection from "../components/techSpecs/ChipSection.vue";
import DisplaySection from "../components/techSpecs/DisplaySection.vue";
import BatterySpecSection from "../components/techSpecs/BatterySpecSection.vue";
</script>
