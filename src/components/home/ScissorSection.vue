<template>
  <div class="flex justify-center mt-7">
    <div
      class="grid gap-5 md:grid md:grid-cols-2 md:gap-4 xl:grid xl:gap-5 xl:grid-cols-2 w-10/12 sm:w-[400px] md:w-11/12 lg:w-[979px] xl:w-[1300px] 2xl:w-[1400px]"
    >
      <div
        id="scissor"
        class="rounded-3xl h-[34em] md:h-[36em] lg:h-[38em] xl:h-[40em] 2xl:h-[43em] p-6"
      >
        <p
          class="font-['SF_Pro_Semibold'] text-[#fff] text-[19px] md:text-[21px] font-semibold"
        >
          Scissor mechanism
        </p>
        <p
          class="text-[#fff] text-2xl md:text-[28px] xl:text-[32px] font-semibold font-['SF_Pro_Semibold'] lg:w-10/12 xl:w-7/12 mt-7"
        >
          Every keystroke, thought, or line of code just feel right.
        </p>
        <div
          class="mx-auto mt-24 w-7/12 md:w-10/12 lg:w-11/12 grid place-items-center"
        >
          <img
            src="../../assets/scissor_mechanism__danir2ptylsi_small_2x.png"
            alt=""
            class="md:hidden"
          />
          <img
            src="../../assets/scissor_mechanism__danir2ptylsi_medium.png"
            class="hidden md:block"
          />
        </div>
      </div>
      <div
        id="touchBar"
        class="bg-[#151516] overflow-hidden rounded-3xl h-[33em] md:h-[36em] lg:h-[38em] xl:h-[40em] 2xl:h-[43em] p-6"
      >
        <p
          class="font-['SF_Pro_Semibold'] text-[#fff] text-[19px] md:text-[21px] font-semibold"
        >
          Touch Bar
        </p>
        <p
          class="font-['SF_Pro_Semibold'] mt-6 text-[#fff] text-[19px] 2xl:text-[21px] xl:w-10/12 font-semibold"
        >
          Shortcuts to success.
          <span class="text-[#d2d2d7]"
            >Do all kinds of things quicker with handy shorcuts and features -
            like your favorite emoji, preffered languages, and easier access to
            siri.</span
          >
        </p>
        <div
          class="bg-[url('https://res.cloudinary.com/dk7urhntn/image/upload/v1668205955/macbook/touchbar_gylnrl.jpg')] -translate-x-14 xl:-translate-x-12 2xl:-translate-y-10 bg-no-repeat bg-contain mt-[70px] sm:mt-16 md:mt-24 xl:mt-4 2xl:mt-14 h-full"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#scissor {
  background: linear-gradient(150deg, #124d86 0%, #14204e 100%);
}
</style>
