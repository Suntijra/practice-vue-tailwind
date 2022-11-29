<template>
  <div class="flex justify-around mt-5">
    <span @click="slidediv('left')" class="active:text-white">SIGN IN</span>
    <span @click="slidediv('right')" class="active:text-white">SIGN UP</span>
  </div>
  <div class="mt-4 h-[100%]">
    <!-- page sign in button -->
    <div
      class="animate-left animate-opacity flex flex-col h-[100%] items-center"
      :class="{ hidden: obj.hidden }"
    >
      <div class="relative inline-flex flex-col my-3">
        <img class="w-[75vw]" src="../assets/img/username.svg" alt="" />
        <input
          class="absolute left-[35%] top-[35%] w-[40vw]"
          type="text" placeholder="username" 
        />
      </div>
      <div class="relative inline-flex flex-col my-3">
        <img class="w-[75vw]" src="../assets/img/password.svg" alt="" />
        <input
          class="absolute left-[35%] top-[35%] w-[40vw]"
          type="text" placeholder="password"
        />
      </div>
      <div class="relative inline-flex flex-col my-3">
        <img class="w-[75vw]" src="../assets/img/password.svg" alt="" />
        <input
          class="absolute left-[35%] top-[35%] w-[40vw]"
          type="text" placeholder="password"
        />
      </div>
      
    </div>
  <!-- page sign up button -->
    <div
      class="animate-right animate-opacity flex flex-col h-[100%] items-center"
      :class="{ hidden: !obj.hidden }"
    >
    <div class="relative inline-flex flex-col my-3">
        <img class="w-[75vw]" src="../assets/img/username.svg" alt="" />
        <input
          class="absolute left-[35%] top-[35%] w-[40vw]"
          type="text" placeholder="username" 
        />
      </div>
      <div class="relative inline-flex flex-col my-3">
        <img class="w-[75vw]" src="../assets/img/password.svg" alt="" />
        <input
          class="absolute left-[35%] top-[35%] w-[40vw]"
          type="text" placeholder="password"
        />
      </div>
      <div class="relative inline-flex flex-col my-3">
        <img class="w-[75vw]" src="../assets/img/password.svg" alt="" />
        <input
          class="absolute left-[35%] top-[35%] w-[40vw]"
          type="text" placeholder="password"
        />
      </div>
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
::placeholder {
  color: black;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
 color: black;
}

::-ms-input-placeholder { /* Microsoft Edge */
 color: black;
}
input{
  outline: none;
  background: none;
}
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