<template>
  <div>
    <p class="text-white" ref="text">***</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const text = ref(null);
const windowY = ref(null);
</script>
