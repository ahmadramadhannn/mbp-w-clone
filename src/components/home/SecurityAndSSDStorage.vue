<template>
  <div class="h-[10000px]">
    <p class="text-white" ref="text">***</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const text = ref(null);
const windowY = ref(null);

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

const onScroll = (e) => {
  windowY.value = window.scrollY;
  if (windowY.value > 6300) {
    text.value.innerHTML = "secur ******";
  } else if (windowY.value > 6400) {
    text.value.innerHTML = "securely ****";
  }
};
</script>
