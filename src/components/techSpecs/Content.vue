<template>
  <div
    :class="{
      'md:gap-24 xl:gap-44': title === 'Display',
      'md:gap-9 xl:gap-6': title === 'Battery and Power¹',
      'md:gap-32 xl:gap-[196px]':
        title != 'Display' && title != 'Battery and Power¹',
    }"
    id="content"
    class="md:flex"
  >
    <p
      id="title"
      :class="{
        'md:w-32 xl:w-52': title === 'Battery and Power¹',
        'xl:w-14': title === 'Display',
      }"
      class="font-['SF_Pro_Medium'] font-medium text-[#fff] text-2xl"
    >
      {{ title }}
    </p>
    <div class="mb-14 mt-8 md:mt-0">
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
