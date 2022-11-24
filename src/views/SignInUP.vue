/* eslint-disable */
<template>
  <div class="bg-black h-full border text-center fixed w-full">
    <div class="h-[40vh] flex flex-col justify-center">
      <div class="animate-opacity" :class="{ hidden: !obj.slide }">
        <h1 class="text-[#E9A700] text-5xl">Welcome</h1>
        <h1 class="text-[#E9A700] mt-5">moondoge dogecoin wallet apps</h1>
      </div>
    </div>
  </div>

  <div
    class="
      fixed
      bg-[#E9A700]
      h-[0vh]
      w-full
      bottom-0
      rounded-t-[36px]
      inset-shadow-botton
    "
    :class="{ 'slide-to-up': obj.slide }"
  >
    <SignInUpElem />
  </div>
</template>

<script setup>
import SignInUpElem from "@/components/SignInUp.vue"
import { reactive } from "vue";
const obj = reactive({
  slide: false,
  message: "hello doge",
  hidden: false,
});
// const slidecheck = ref(true)
setTimeout(() => {
  obj.slide = true;
}, 100);
</script>

<style scoped>
.slide-to-up {
  height: 60vh;
  transition: height 0.75s;
}
.inset-shadow-botton {
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>>