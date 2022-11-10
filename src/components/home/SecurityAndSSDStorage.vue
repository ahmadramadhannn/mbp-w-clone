<template>
  <div>
    <p class="text-white" ref="text">Keep what’s private, pri••••.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const text = ref(null);
const windowY = ref(null);
</script>
