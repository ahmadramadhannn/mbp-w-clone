<template>
  <div
    id="led_display"
    v-for="(data, index) in displayData"
    :key="index"
    :class="image ? `bg-[url('${image}')] bg-no-repeat bg-cover` : ''"
    class="p-6 lg:p-10 rounded-3xl h-[35em] md:h-[44em] xl:h-[40em] 2xl:h-[42em] bg-[#151516] md:w-[300px] lg:w-[470px] xl:w-1/3"
  >
    <span
      class="font-['SF_Pro_Semibold'] text-[19px] md:text-[21px] text-[#fff] font-semibold"
      id="title"
      >{{ data.title }}</span
    >
    <div
      class="mt-24 grid place-content-center place-items-center mx-auto w-[160px] md:w-11/12 lg:w-9/12 xl:w-8/12"
    >
      <slot />
      <div class="grid place-content-center place-items-center min-h-[15em]">
        <span
          class="font-['SF_Pro_Medium'] font-bold text-[#fff] mt-10 text-5xl md:text-[64px] xl:text-[80px]"
          >{{ data.otherDesc }}</span
        >
        <span
          class="text-xl md:text-[24px] xl:text-[28px] font-['SF_Pro_Text'] font-normal w-11/12 xl:w-full text-center mt-3 text-[#ffffff]"
        >
          {{ data.desc }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  displayData: Array,
  image: String,
});
</script>
