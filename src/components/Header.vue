<template>
  <header
    :class="$route.path === '/whymac' ? 'whymac' : 'bg-black'"
    class="relative min-h-[2em] flex justify-center"
  >
    <div
      class="w-11/12 sm:w-[94%] lg:w-[980px] xl:w-[995px] flex justify-between xl:flex gap-10 items-center"
    >
      <i
        @click="showList"
        class="fa fa-bars text-gray-400 block lg:hidden"
        aria-hidden="true"
      ></i>
      <NavMobile v-if="List" :headerList="headerList" />

      <img src="../assets/apple.svg" alt="apple logo" class="text-[#f5f5f7]" />
      <ul class="hidden lg:flex items-center gap-10">
        <li
          v-for="(data, index) in headerList"
          :key="index"
          class="font-normal text-gray-300 hover:text-[#f5f5f7] text-[12px]"
        >
          {{ data.name }}
        </li>
      </ul>
      <i
        class="hidden lg:block fa fa-search text-[#f5f5f7]"
        aria-hidden="true"
      ></i>
      <a href="" class="">
        <img src="../assets/cart.svg" alt="" />
      </a>
    </div>
  </header>
  <nav
    :class="{
      'bg-[##f5f5f7]': $route.path === '/whymac',
      stickY: $route.path != '/whymac',
      'border-b-2': scrollY > 50 && $route.path === '/whymac',
    }"
    class="sm:min-h-[2em] sticky top-0 z-[99] backdrop-blur-md flex justify-center"
  >
    <div
      :class="{
        'h-[10em]': listPage,
        'border-b-2 ': $route.path === '/whymac' && scrollY < 50,
      }"
      class="w-11/12 sm:w-[94%] lg:w-[980px] xl:w-[995px] relative lg:static flex lg:flex lg:justify-between py-2"
    >
      <router-link to="/">
        <p
          href="#"
          :class="$route.path === '/whymac' ? 'text-[#000]' : 'text-[#fff]'"
          class="font-['SF_Pro_Display_Light'] font-semibold sm:text-[19px] lg:text-[21px]"
        >
          MacBook Pro 13"
        </p>
      </router-link>
      <div class="grid lg:flex items-center lg:gap-6">
        <div
          :class="listPage ? 'grid' : 'hidden lg:flex'"
          class="absolute lg:static w-full top-6 left-0 p-6 lg:p-0"
        >
          <router-link
            id="link"
            :class="$route.path === '/whymac' ? 'text-[#000]' : 'text-white'"
            class="text-sm p-2 xl:text-[12px] font-['SF_Pro_Text'] hover:text-[#2997ff] font-normal"
            v-for="(data, index) in pageList"
            :key="index"
            :to="data.to"
            >{{ data.page }}</router-link
          >
        </div>
        <p
          @click="showPageList"
          :class="{ 'rotate-180': listPage }"
          class="chevron top absolute right-16 top-2 lg:hidden"
        ></p>
        <a
          href="#"
          class="text-[#fff] absolute lg:static right-0 top-2 px-3 py-1 rounded-full font-['SF_Pro_Text'] text-[12px] font-normal bg-[#0071e3]"
          >Buy</a
        >
      </div>
    </div>
  </nav>
  <div
    :class="{ hidden: $route.path !== '/' }"
    id="hidden"
    class="min-h-[2em] flex justify-center py-3"
  >
    <div class="w-11/12 text-center">
      <span
        class="font-['SF_Pro_Text'] w-11/12 font-normal text-[#f5f5f7] text-sm"
      >
        Get a 13-inch MacBook Pro starting at $1199 in our Education Store.*
        <a
          id="link_shop"
          href="https://www.apple.com/us-hed/shop"
          target="_blank"
          class="text-[#2997ff] hover:underline"
          >Shop</a
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NavMobile from "./home/NavMobile.vue";
const List = ref(false);
const listPage = ref(false);
const scrollTimer = ref(0);
const scrollY = ref(0);

const showList = () => {
  List.value = !List.value;
};

const showPageList = () => {
  listPage.value = !listPage.value;
};

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

const pageList = [
  { id: 1, page: "Overview", to: "/" },
  { id: 2, page: "Why Mac", to: "/whymac" },
  { id: 3, page: "Tech Specs", to: "/techspecs" },
];

const handleScroll = () => {
  if (scrollTimer.value) return;
  scrollTimer.value = setTimeout(() => {
    scrollY.value = window.scrollY;
    scrollTimer.value = 0;
  }, 100);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style scoped>
#link_shop::after {
  content: " ›";
}
body {
  background: white;
}
.stickY,
#hidden {
  background-color: rgba(29, 29, 31, 0.72);
}

.whymac {
  background-color: rgba(0, 0, 0, 0.8) !important;
}
.active {
  color: gray;
}

.stickY {
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
}

.chevron::before {
  border-style: solid;
  border-width: 0.25em 0.25em 0 0;
  content: "";
  display: inline-block;
  height: 0.6em;
  position: relative;
  transform: rotate(134deg);
  width: 0.6em;
}

@media (max-width: 1023px) {
  .stickY,
  #link {
    border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  }
}
</style>
