<template>
  <Content :title="'Memory'">
    <div class="w-11/12 grid">
      <span
        class="font-['SF_Pro_Display_Light'] text-[32px] font-semibold text-[#f5f5f7]"
        >8GB</span
      >
      <span
        class="font-['SF_Pro_Text'] text-[#a2a2a2] mt-2 text-[17px] font-normal"
        >8GB unified memory
      </span>
      <span
        class="font-['SF_Pro_Text'] mt-5 text-[#fff] text-[17px] font-semibold"
        >Configuration to:
      </span>
      <span
        class="font-['SF_Pro_Text'] text-[#a2a2a2] mt-2 text-[17px] font-normal"
        >16GB or 24GB
      </span>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
</script>
