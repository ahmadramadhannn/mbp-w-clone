<template>
  <div class="flex justify-center mt-6">
    <div
      id="touch_id"
      class="w-[87%] sm:w-[400px] md:w-11/12 lg:w-[979px] xl:w-[1300px] 2xl:w-[1400px] rounded-3xl md:h-[41em] lg:h-[37em] xl:h-[43em]"
    >
      <div class="p-6 lg:p-8 xl:p-10">
        <p
          class="text-[#fff] text-[19px] md:text-[21px] font-semibold font-['SF_Pro_Semibold']"
        >
          Touch ID
        </p>
        <div
          class="mt-12 xl:mt-28 md:grid md:gap-6 md:grid-cols-2 xl:grid xl:gap-14 xl:grid-cols-2"
        >
          <div>
            <p
              class="font-['SF_Pro_Semibold'] leading-[33px] xl:leading-[35px] sm:w-[320px] lg:w-[400px] xl:w-[530px] font-semibold text-[#fff] text-[24px] md:text-[28px] xl:text-[32px]"
            >
              A touch on the sensor instantly unlocks your Mac, and a press
              locks it. Use your fingerprint to rent movies, buy apps, or access
              things like locked documents or system settings without having to
              reenter your password. And when you shop online with Apple Pay,
              Touch ID automatically fills in your shipping and billing
              information without sharing your card details.
            </p>
          </div>
          <div
            class="mt-10 md:mt-0 grid grid-cols-2 gap-4 xl:grid xl:gap-x-3 xl:gap-y-20 xl:grid-cols-2"
          >
            <div v-for="(data, index) in touchData" :key="index">
              <img :src="data.image" alt="" class="h-12 md:h-20" />
              <p
                class="text-[#fff] mt-3 w-10/12 md:w-full xl:w-8/12 text-[21px] font-['SF_Pro_Semibold'] font-medium"
              >
                {{ data.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const touchData = [
  {
    id: 1,
    name: "Unlock your mac",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1668234056/macbook/touchid_icon_unlock__ekixivepxouq_large_klkelt.png",
  },
  {
    id: 2,
    name: "Use Apple Pay for payments",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1668234057/macbook/touchid_icon_applepay__bjhmwrowzqaa_large_x8q6sv.png",
  },
  {
    id: 3,
    name: "Open password-protected documents",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1668234056/macbook/touchid_icon_protected__fjkptdkk1lme_large_xvbrdr.png",
  },
  {
    id: 4,
    name: "Make purchases on the Apple TV app",
    image:
      "https://res.cloudinary.com/dk7urhntn/image/upload/v1668234057/macbook/touchid_icon_appletv__cwng1bbeljue_large_ubp4gh.png",
  },
];
</script>

<style scoped>
#touch_id {
  background: linear-gradient(rgba(0, 0, 0, 0), #151b25, #151516),
    linear-gradient(90deg, #172538, #18263a 50%);
}
</style>
