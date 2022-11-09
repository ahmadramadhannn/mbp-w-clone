<template>
  <Content :title="'Operating System'">
    <div class="grid">
      <p class="font-['SF_Pro_Text'] text-[17px] text-[#fff] font-semibold">
        macOS
      </p>
      <span class="font-['SF_Pro_Text'] text-[17px] font-normal text-[#a2a2a2]"
        >macOS is the most advanced desktop operating system in the world. macOS
        Ventura makes the things you do most on Mac even better, so you can work
        smarter, play harder, and go further.
      </span>
      <a
        href="https://www.apple.com/macos/ventura/"
        class="text-[#2997ff] text-[17px] font-normal mt-3 cursor-pointer hover:underline font-['SF_Pro_Text']"
        target="_blank"
        >Learn more ></a
      >
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
</script>
