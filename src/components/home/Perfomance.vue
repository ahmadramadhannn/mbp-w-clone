<template>
  <div class="flex justify-center mt-[235px]">
    <div class="bg-[#151516] min-h-screen xl:w-[1300px] xl:flex rounded-3xl">
      <div id="aside" class="p-10 w-[450px]">
        <div class="grid">
          <span
            class="text-[#fff] font-['SF_Pro_Medium'] font-medium text-[21px]"
            >Performance</span
          >
          <span
            class="text-[#fff] w-10/12 mt-6 font-medium text-[32px] font-['SF_Pro_Medium']"
          >
            M2 brings more power. To go.
          </span>
        </div>
      </div>
      <div class="border-8 xl:w-[740px]">
        <div class="text-white grid">
          <span v-for="(data, index) in comparedData" :key="index"
            >{{ data.compared }}
            <span v-for="(dat, index) in data.children">
              {{ dat }}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const comparedData = [
  {
    id: 1,
    compared: "Video Editing",
    children: [
      {
        id: 1,
        name: "faster video",
        result: "w-80",
      },
    ],
  },
  {
    id: 2,
    compared: "ProRes video transcode",
    children: [{ id: 2, name: "blablabla", result: "w-72" }],
  },
];
</script>

<style scoped>
.bars {
  background: linear-gradient(to right, #ffc600, #e8482e, #9c209d);
}
</style>
