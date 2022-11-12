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
  </div>
</template>

<script setup>
import { onMounted } from "vue";
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

onMounted(() => {
  document.body.style.backgroundColor = "black";
});
</script>

<style></style>
