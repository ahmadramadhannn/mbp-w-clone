<template>
  <Content :title="'Limited Warranty and Service'">
    <div class="grid">
      <span class="font-['SF_Pro_Text'] font-normal text-[#a2a2a2] text-[17px]">
        Your MacBook Pro comes with 90 days of complimentary technical support
        and a one‑year limited warranty. Purchase
        <a
          href="https://www.apple.com/support/products/mac/"
          target="_blank"
          class="hover:underline text-[#2997ff]"
          >AppleCare+ for Mac</a
        >
        to extend your coverage from your AppleCare+ purchase date and add
        unlimited repairs for accidental damage from handling, each subject to a
        service fee of $99 for screen damage or external enclosure damage, or
        $299 for other repairable accidental damage, plus applicable tax.
      </span>
      <a
        id="link"
        href="https://support.apple.com/"
        target="_blank"
        class="text-[#2997ff] mt-8 hover:underline font-['SF_Pro_Text'] font-normal"
        >Learn more</a
      >
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
</script>

<style scoped>
#link::after {
  content: " ›";
}
</style>
