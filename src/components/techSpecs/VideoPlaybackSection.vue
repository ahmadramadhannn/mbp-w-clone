<template>
  <Content :title="'Video Playback'">
    <div class="grid md:w-[520px]">
      <span class="text-[#a2a2a2] font-normal font-['SF_Pro_Text'] text-[17px]"
        >Supported formats include HEVC, H.264, and ProRes</span
      >
      <span class="text-[#a2a2a2] font-normal font-['SF_Pro_Text'] text-[17px]"
        >HDR with Dolby Vision, HDR10, and HLG</span
      >
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";
</script>
