<template>
  <header class="bg-black min-h-[2em] flex justify-center">
    <div class="xl:w-[1000px] xl:flex gap-10 items-center">
      <img src="../assets/apple.svg" alt="apple logo" class="text-[#f5f5f7]" />
      <ul class="flex gap-10">
        <li
          v-for="(data, index) in headerList"
          :key="index"
          class="font-normal text-gray-300 hover:text-[#f5f5f7] text-[12px]"
        >
          {{ data.name }}
        </li>
      </ul>
      <i class="fa fa-search text-[#f5f5f7]" aria-hidden="true"></i>

      <a href="" class="">
        <img
          src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"
          alt=""
        />
      </a>
    </div>
  </header>
</template>

<script setup>
const headerList = [
  { id: 1, name: "Store" },
  { id: 2, name: "Mac" },
  { id: 3, name: "iPad" },
  { id: 4, name: "iPhone" },
  { id: 5, name: "Watch" },
  { id: 6, name: "AirPods" },
  { id: 7, name: "TV & Home" },
  { id: 8, name: "Only on Apple" },
  { id: 9, name: "Accessories" },
  { id: 10, name: "Support" },
];
</script>

<style scoped></style>
