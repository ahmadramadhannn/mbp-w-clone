<template>
  <Content :title="'Configure to Order'">
    <div class="grid">
      <span class="font-['SF_Pro_Text'] text-[17px] text-[#a2a2a2] font-normal">
        Configure your MacBook Pro with these options at
        <a
          class="text-[#2997ff] hover:underline"
          href="https://www.apple.com/us/shop/goto/buy_mac/macbook_pro_13"
          target="_blank"
          >apple.com</a
        >:
      </span>
      <p
        class="text-[#a2a2a2] mt-8 text-[17px] font-normal font-['SF_Pro_Text']"
      >
        16GB or 24GB unified memory
      </p>
      <p
        class="text-[#a2a2a2] mt-3 text-[17px] font-normal font-['SF_Pro_Text']"
      >
        512GB, 1TB, or 2TB SSD
      </p>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
</script>
