<template>
  <Content :title="'Accessories'">
    <div class="md:flex md:gap-10 xl:gap-12">
      <div id="accessories_data" class="grid md:w-5/12">
        <div
          v-for="(data, index) in accessoriesData"
          :key="index"
          :class="{ 'mt-5': data.id === 2 }"
          class="grid"
        >
          <p
            id="title"
            class="font-['SF_Pro_Text'] text-[#fff] text-[17px] font-semibold"
          >
            {{ data.title }}
          </p>
          <div class="grid gap-1 mt-3">
            <a
              v-for="(content, index) in data.children"
              :key="index"
              :href="content.link"
              target="_blank"
              id="content"
              class="text-[#2997ff] text-[17px] font-normal hover:underline"
              >{{ content.content }}</a
            >
          </div>
        </div>
      </div>
      <div
        id="other_accessories"
        class="grid md:h-[12em] mt-12 md:mt-0 md:w-5/12"
      >
        <div
          v-for="(data, index) in otherAccessoriesData"
          :key="index"
          class="grid"
        >
          <p
            id="title"
            class="font-['SF_Pro_Text'] text-[#fff] text-[17px] font-semibold"
          >
            {{ data.title }}
          </p>
          <div class="grid gap-1 mt-3">
            <a
              v-for="(content, index) in data.children"
              :key="index"
              :href="content.link"
              target="_blank"
              id="content"
              class="text-[#2997ff] text-[17px] font-normal hover:underline"
              >{{ content.content }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </Content>
</template>

<script setup>
import Content from "./Content.vue";

import otherAccessoriesData from "../../data/otherAccessoriesData";
import accessoriesData from "../../data/accessoriesData";
</script>
