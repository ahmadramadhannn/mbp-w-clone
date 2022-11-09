<template>
  <Content :title="'Accessi­bility'">
    <div class="grid">
      <p class="font-['SF_Pro_Text'] text-[17px] text-[#a2a2a2] font-normal">
        Accessibility features help people with disabilities get the most out of
        their new MacBook Pro. With built-in support for vision, hearing,
        mobility, and learning, you can create and do amazing things.
      </p>
      <a
        href="https://www.apple.com/accessibility/"
        target="_blank"
        class="text-[#2997ff] mt-4 cursor-pointer hover:underline font-normal text-[17px] font-['SF_Pro_Text']"
      >
        Learn more >
      </a>
    </div>
    <p class="font-['SF_Pro_Text'] mt-14 font-semibold text-[#fff] text-[17px]">
      Features include:
    </p>
    <div class="xl:flex xl:gap-32 mt-4">
      <div
        v-for="(data, index) in featuresIncludeData"
        :key="index"
        class="grid"
      >
        <p
          v-for="(feature, index) in data.feature"
          :key="index"
          class="font-['SF_Pro_Text'] font-normal text-[#a2a2a2] text-[17px]"
        >
          {{ feature }}
        </p>
      </div>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

const featuresIncludeData = [
  { id: 1, feature: ["Voice Control", "VoiceOver", "Zoom"] },
  {
    id: 2,
    feature: ["Increase Contrast", "Reduce Motion", "Siri and Dictation"],
  },
  { id: 3, feature: ["Switch Control", "Live Captions"] },
];
</script>
