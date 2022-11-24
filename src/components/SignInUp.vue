<template>
  <div class="flex justify-around mt-5">
    <span @click="slidediv('left')" class="active:text-white">SIGN IN</span>
    <span @click="slidediv('right')" class="active:text-white">SIGN UP</span>
  </div>
  <div class="bordermt-4 h-[100%]">
    <div
      class="animate-left animate-opacity flex flex-col h-[100%] items-center"
      :class="{ hidden: obj.hidden }"
    >
      <div class="relative inline-flex flex-col my-3">
        <img class="" src="../assets/img/username.svg" alt="" />
        <input
          class="absolute left-[0vw] w-[40vw]"
          type="text"
        />
      </div>
      <div class="relative inline-flex flex-col my-3">
        <!-- <img class="w-[70vw]" src="../assets/img/password.svg" alt="" /> -->
        <!-- <input type="text" /> -->
      </div>
    </div>
    <div
      class="animate-right absolute left-[40vw] w-[40vw] top-"
      :class="{ hidden: !obj.hidden }"
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, non
      natus magnam quibusdam deleniti delectus hic repellat nisi fugit deserunt
      ex necessitatibus ipsa quas earum repellendus officia, eos porro maxime.
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const obj = reactive({
  slide: false,
  hidden: false,
  imgpassword: "../assets/img/password.svg",
  imgusername: "../assets/img/username.svg",
});

/* eslint-disable */
function slidediv(check) {
  if (check == "left") {
    obj.hidden = false;
  } else {
    obj.hidden = true;
  }
}
setTimeout(() => {
  obj.slide = true;
}, 100);
</script>

<style >
.animate-opacity {
  animation: opac 2s;
}
.animate-left {
  position: relative;
  animation: slide-left 1s;
}
.animate-right {
  position: relative;
  animation: slide-right 1s;
}
@keyframes opac {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slide-left {
  from {
    left: -300px;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}
@keyframes slide-right {
  from {
    right: -300px;
    opacity: 0;
  }
  to {
    right: 0;
    opacity: 1;
  }
}
</style>