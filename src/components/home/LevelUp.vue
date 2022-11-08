<template>
  <div class="mt-24 flex justify-center">
    <div
      class="grid place-content-center place-items-center w-[94%] sm:w-10/12 md:w-[710px] xl:w-[1080px]"
    >
      <p
        class="font-bold text-[#fff] text-center font-['SF_Pro_Medium'] text-5xl md:text-[64px] xl:text-[80px]"
      >
        Level up.
      </p>
      <img
        src="../../assets/m2_chipset.jpg"
        alt=""
        class="sm:h-96 md:h-72 xl:h-full lg:mt-10"
      />
      <p
        class="font-['SF_Pro_Medium'] text-[#fff] mt-6 lg:mt-10 font-medium w-9/12 sm:w-7/12 md:w-full text-[21px] md:text-[24px] xl:text-[28px] leading-[25px] lg:leading-[30px] xl:leading-[35px] text-center"
      >
        The M2 chip begins the next generation of Apple silicon, with even more
        of the speed and power efficiency introduced by M1. So you can rip
        through workflows with a more powerful 8-core CPU. Create stunning
        graphics with a lightning‑fast 10‑core GPU. Work with more streams of 4K
        and 8K ProRes video with the high-performance media engine. And do it
        all at once with up to 24GB of faster unified memory.
      </p>
      <div
        class="grid grid-cols-2 gap-5 place-content-center md:flex md:justify-center mt-8"
      >
        <div
          v-for="(data, index) in levelUpData"
          :key="index"
          class="grid w-32"
        >
          <span class="font-['SF_Pro_Text'] font-normal text-sm text-[#fff]"
            >Up To</span
          >
          <span
            class="text-[#fff] font-['SF_Pro_Medium'] leading-[45px] font-semibold text-[40px]"
          >
            {{ data.name }}
          </span>
          <span class="font-['SF_Pro_Text'] text-[#fff] text-sm">
            {{ data.desc }}
          </span>
        </div>
      </div>
      <a
        href="#_"
        class="relative p-0.5 mt-10 inline-flex items-center justify-center font-bold overflow-hidden group"
      >
        <span
          id="wrapper"
          class="w-full h-full absolute rounded-full group-hover:hidden"
        ></span>
        <span
          class="relative px-8 py-2 border-[1px] border-transparent bg-black transition-all w-full ease-out rounded-full duration-400 group-hover:border-none group-hover:bg-white"
        >
          <span
            id="button"
            class="relative text-white font-['SF_Pro_Text'] group-hover:text-[#000]"
            >Go Inside M2</span
          >
        </span>
      </a>
    </div>
  </div>
</template>

<script setup>
const levelUpData = [
  { id: 1, name: "1.4x", desc: "faster than M1 model²" },
  { id: 2, name: "6x", desc: "faster than Intel-based model²" },
  { id: 3, name: "20 hrs", desc: "battery life¹" },
];
</script>

<style scoped>
#wrapper {
  background: linear-gradient(135deg, #bead47, #922b28, #8e089b);
}
</style>
