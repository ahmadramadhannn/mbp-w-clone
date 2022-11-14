<template>
  <WhyMacSection />
  <EasySetupSection />
  <ProductivitySection />
  <MacIsEasySection />
  <ContinuitySection />
  <PrivacyAndSecuritySection />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useNavbarStore } from "../store/useNavbarStore";
import { onMounted, watchEffect } from "vue";
import WhyMacSection from "../components/whyMac/WhyMacSection.vue";
import EasySetupSection from "../components/whyMac/EasySetupSection.vue";
import ProductivitySection from "../components/whyMac/ProductivitySection.vue";
import MacIsEasySection from "../components/whyMac/MacIsEasySection.vue";
import ContinuitySection from "../components/whyMac/ContinuitySection.vue";
import PrivacyAndSecuritySection from "../components/whyMac/PrivacyAndSecuritySection.vue";

const main = useNavbarStore();

const { preventScroll } = storeToRefs(main);

watchEffect(() => {
  if (preventScroll.value === true) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }
});

onMounted(() => {
  document.body.style.backgroundColor = "#f5f5f7";
});
</script>
