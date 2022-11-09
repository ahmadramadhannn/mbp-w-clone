<template>
  <hr
    class="md:hidden"
    style="height: 2px; border-width: 0; background-color: #1d1d1f"
  />
  <div class="flex justify-center">
    <div class="grid place-content-center place-items-center mt-20">
      <p
        class="font-semibold text-[#f5f5f7] font-['SF_Pro_Display_Light'] text-[32px] md:text-[40px] xl:text-5xl"
      >
        MacBook Pro
      </p>
      <div
        class="grid place-items-center md:flex md:gap-4 xl:gap-5 mt-5 xl:mt-10"
      >
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
      <img
        src="../../assets/mbp_shop_large.png"
        alt=""
        class="hidden md:block mt-14"
      />
      <img
        src="../../assets/mbp_shop_small.png"
        class="h-40 mt-10 md:hidden"
        alt=""
      />
    </div>
  </div>
  <hr
    class="mt-14"
    style="height: 2px; border-width: 0; background-color: #1d1d1f"
  />
</template>

<style scoped>
a::after {
  content: "›";
}
</style>
