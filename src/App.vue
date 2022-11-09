<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="bg-black">
    <RouterView />
  </div>
</template>
