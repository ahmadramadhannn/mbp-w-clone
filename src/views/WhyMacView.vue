<template>
  <WhyMacSection />
  <EasySetupSection />
  <ProductivitySection />
  <MacIsEasySection />
</template>

<script setup>
import { onMounted } from "vue";
import WhyMacSection from "../components/whyMac/WhyMacSection.vue";
import EasySetupSection from "../components/whyMac/EasySetupSection.vue";
import ProductivitySection from "../components/whyMac/ProductivitySection.vue";
import MacIsEasySection from "../components/whyMac/MacIsEasySection.vue";

onMounted(() => {
  document.body.style.backgroundColor = "#f5f5f7";
});
</script>
