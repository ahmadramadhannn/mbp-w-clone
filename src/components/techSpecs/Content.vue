<template>
  <div id="content" class="md:flex md:justify-between">
    <p
      id="title"
      class="font-['SF_Pro_Medium'] w-3/12 font-medium text-[#fff] text-2xl"
    >
      {{ title }}
    </p>
    <div class="mb-14 mt-8 md:mt-0 w-9/12">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style scoped>
@media (max-width: 767px) {
  #title {
    border-bottom: 2px solid #1d1d1f;
    width: 100%;
    padding-bottom: 0.75rem;
  }
}
@media (min-width: 767px) {
  #content {
    border-bottom: 2px solid #1d1d1f;
  }
}
</style>
