<template>
  <div>
    <BannerHero />
    <LevelUp />
    <Perfomance />
    <ThermalEfficiency />
    <PerformWell />
    <BatteryAndMediaEngine />
    <SecurityAndSSDStorage />
    <DisplayIntroSection />
    <DisplayTechnology />
    <IntroCameraSection />
    <FaceTimeAndMicSection />
    <MagicKeyboardSection />
    <ScissorSection />
    <TouchIDSection />
    <ConnectivityIntroSection />
    <PortAndWifiSection />
  </div>
</template>

<script setup>
import { useNavbarStore } from "../store/useNavbarStore";
import { storeToRefs } from "pinia";
import { onMounted, watchEffect } from "vue";
import BannerHero from "../components/home/BannerHero.vue";
import LevelUp from "../components/home/LevelUp.vue";
import Perfomance from "../components/home/Perfomance.vue";
import ThermalEfficiency from "../components/home/ThermalEfficiency.vue";
import PerformWell from "../components/home/PerformWell.vue";
import BatteryAndMediaEngine from "../components/home/BatteryAndMediaEngine.vue";
import SecurityAndSSDStorage from "../components/home/SecurityAndSSDStorage.vue";
import DisplayIntroSection from "../components/home/DisplayIntroSection.vue";
import DisplayTechnology from "../components/home/DisplayTechnology.vue";
import IntroCameraSection from "../components/home/IntroCameraSection.vue";
import FaceTimeAndMicSection from "../components/home/FaceTimeAndMicSection.vue";
import MagicKeyboardSection from "../components/home/MagicKeyboardSection.vue";
import ScissorSection from "../components/home/ScissorSection.vue";
import TouchIDSection from "../components/home/TouchIDSection.vue";
import ConnectivityIntroSection from "../components/home/ConnectivityIntroSection.vue";
import PortAndWifiSection from "../components/home/PortAndWifiSection.vue";

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
  document.body.style.backgroundColor = "black";
});
</script>

<style></style>
