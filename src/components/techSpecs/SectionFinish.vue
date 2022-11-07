<template>
  <Content :title="'Finish'">
    <div class="grid">
      <img
        src="../../assets/finish.jpg"
        alt=""
        class="h-20 md:h-36 xl:h-full"
      />
      <div
        class="flex justify-between items-center mt-3 lg:mt-6 w-7/12 sm:w-[200px] md:w-[350px] lg:w-[550px]"
      >
        <span
          class="text-[#a2a2a2] font-['SF_Pro_Text'] font-normal w-6/12 text-center"
          >Silver</span
        >
        <span
          class="text-[#a2a2a2] font-['SF_Pro_Text'] font-normal w-6/12 text-center"
          >Space Gray</span
        >
      </div>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
</script>
