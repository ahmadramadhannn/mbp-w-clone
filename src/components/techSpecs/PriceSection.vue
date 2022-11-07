<template>
  <Content :title="'Price'">
    <div
      class="w-8/12 sm:w-[350px] md:w-[300px] xl:w-[430px] flex justify-between items-center"
    >
      <span class="font-['SF_Pro_Text'] text-[#a2a2a2] font-normal text-[17px]"
        >$1299
      </span>
      <span class="font-['SF_Pro_Text'] text-[#a2a2a2] font-normal text-[17px]"
        >$1499
      </span>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
</script>
