<template>
  <div>
    <div
      id="content"
      class="mt-7 lg:flex lg:gap-x-3 lg:leading-[32px] xl:leading-[40px] lg:flex-wrap w-full xl:w-[600px]"
    >
      <p
        v-for="(row, index) in content"
        :key="index"
        @click="selectTab(row.id)"
        :class="
          currentTab == row.id
            ? 'text-[#fff] cursor-default'
            : 'text-[#a1a1a6] hover:underline cursor-pointer'
        "
        class="text-[21px] md:text-[28px] content xl:text-[32px] font-['SF_Pro_Display_Light'] font-semibold"
      >
        {{ row.title }} /
      </p>
    </div>

    <div v-for="(row, index) in content" :key="index">
      <div v-if="currentTab == row.id" v-for="(content, index) in row.children">
        <div class="mt-10 xl:mt-24">
          <span
            id="title_compared"
            class="text-[21px] xl:text-[28px] text-[#f5f5f7] font-['SF_Pro_Display_Light'] font-semibold"
          >
            {{ content.titleCompared }}
          </span>
          <div
            id="macbook_m2"
            :class="content.m2Bars"
            class="bars rounded-full h-2 mt-14"
          ></div>
          <div
            id="macbook_m2"
            class="w-11/12 xl:w-[680px] flex justify-between"
          >
            <p
              class="font-['SF_Pro_Text'] text-[17px] w-8/12 font-semibold text-[#d2d2d7] mt-4"
            >
              MacBook Pro 13” with M2
            </p>
            <p
              class="text-[#CC18C6] font-['SF_Pro_Medium'] text-[28px] xl:text-[56px] -translate-y-6 font-semibold"
            >
              {{ content.result }}
            </p>
          </div>
          <div
            id="another_laptop"
            :class="content.another"
            class="bg-[#d2d2d7] rounded-full h-2 mt-5"
          ></div>
          <p
            id="another_laptop"
            class="font-['SF_Pro_Text'] mb-20 w-6/12 font-semibold text-[#d2d2d7] mt-4"
          >
            {{ content.comparedTo }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  content: Array,
  props: Text,
});

const currentTab = ref(1);

const selectTab = (selectedTab) => {
  currentTab.value = selectedTab;
};
</script>
<style scoped>
.bars {
  background: linear-gradient(to right, #ffc600, #e8482e, #9c209d);
}
</style>
