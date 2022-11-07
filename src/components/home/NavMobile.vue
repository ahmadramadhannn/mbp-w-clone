<template>
  <div
    class="left-0 top-10 z-[99] w-full flex justify-center fixed h-screen sm:h-full bg-black overflow-scroll"
  >
    <div class="w-full">
      <div id="search" class="flex items-center gap-3 relative p-3 w-full">
        <i
          class="fa fa-search text-[#6e6e73] absolute left-5"
          aria-hidden="true"
        ></i>
        <input
          type="text"
          id="search"
          class="text-sm rounded-lg block w-full p-2 pl-8 bg-[#1d1d1f] font-['SF_Pro_Text] text-[17px] font-normal placeholder:text-[#6e6e73]"
          placeholder="Search apple.com"
          required
        />
      </div>
      <div class="w-10/12 p-1 mx-auto mt-1 grid gap-3">
        <p
          v-for="(data, index) in headerList"
          :key="index"
          class="font-['SF_Pro_Text'] pb-2 w-full border-b font-normal text-[#f5f5f7] text-[17px]"
        >
          {{ data.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  headerList: Array,
});
</script>

<style scoped>
#search {
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
}
</style>
