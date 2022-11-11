<template>
  <div class="grid place-content-center place-items-center mt-32 xl:mt-48">
    <div class="grid w-[88%] sm:w-[400px] md:w-[680px] xl:w-[940px]">
      <span
        class="font-['SF_Pro_Medium'] leading-[50px] font-bold text-[#a1a1a6] text-5xl md:text-[64px] xl:text-[80px]"
        >Camera and mics
      </span>
      <span
        class="text-[#f5f5f7] font-bold text-5xl md:text-[64px] xl:text-[80px] font-['SF_Pro_Medium']"
        >Be seen. Be heard.
      </span>
      <p
        class="text-[#a1a1a6] mt-8 font-['SF_Pro_Medium'] leading-[30px] lg:leading-[35px] xl:w-10/12 text-[21px] md:text-[24px] xl:text-[28px] font-medium"
      >
        Thanks to M2, the FaceTime HD camera takes full advantage of our latest
        image signal processor — so you’ll look great in video calls. And
        whether you’re running a meeting, hosting a podcast, or connecting with
        friends and family, the studio-quality mics will make sure everyone
        hears you loud and clear.
      </p>
    </div>
    <div
      class="mt-14 w-[360px] md:w-[800px] xl:w-[1100px] flex justify-center bg-[url('https://res.cloudinary.com/dk7urhntn/image/upload/v1668142345/macbook/camera_hero_hardware__cfpmer0zbeeu_small_2x_fhzu42.jpg')] md:bg-[url('https://res.cloudinary.com/dk7urhntn/image/upload/v1668143163/macbook/camera_hero_hardware__cfpmer0zbeeu_medium_2x_enwvon.jpg')] xl:bg-[url('https://res.cloudinary.com/dk7urhntn/image/upload/v1668141194/macbook/camera_hero_hardware__cfpmer0zbeeu_large_2x_opdswm.jpg')] bg-center bg-no-repeat bg-contain md:bg-cover h-[20em] md:h-[30em] xl:h-[40em]"
    >
      <img
        ref="image"
        src="../../assets/camera_hero_screen__tgpl9q3xy1ei_small_2x.png"
        alt=""
        class="h-[103px] md:hidden mt-16"
      />
      <img
        ref="image"
        src="../../assets/camera_hero_screen__tgpl9q3xy1ei_small_2x.png"
        alt=""
        class="hidden md:block lg:hidden mt-7 h-[230px]"
      />
      <img
        ref="image"
        src="../../assets/camera_hero_screen__tgpl9q3xy1ei_large.png"
        alt=""
        class="hidden lg:block md:h-[230px] xl:h-[319px] mt-6"
      />
    </div>
  </div>
</template>
