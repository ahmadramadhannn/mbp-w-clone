<template>
  <div class="flex justify-center">
    <div class="grid mt-20">
      <p
        class="font-semibold text-[#f5f5f7] font-['SF_Pro_Display_Light'] xl:text-5xl"
      >
        MacBook Pro
      </p>
      <div class="xl:flex xl:gap-5 mt-10">
        <a
          href="https://www.apple.com/us/shop/goto/buy_mac/macbook_pro_13"
          target="_blank"
          class="font-normal text-[17px] text-[#2997ff] hover:underline font-['SF_Pro_Text']"
          >Buy
        </a>
        <a
          href="https://www.apple.com/mac/compare/"
          target="_blank"
          class="font-normal text-[17px] text-[#2997ff] hover:underline font-['SF_Pro_Text']"
          >Compare all Mac models
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
a::after {
  content: "›";
}
</style>
