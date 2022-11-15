<template>
  <div class="bg-black h-full border text-center fixed w-full">
    <h1 class="text-white">this is SignIn   {{activeSlide}}</h1>
  
  </div>
  <div 
  class="fixed bg-[#E9A700] h-[0vh] w-full bottom-0 rounded-t"
  :class="{'slide-to-up' : activeSlide}"
  >xxx</div>
</template>

<script>
export default {
    data() {
        return {
            activeSlide: false
        }
    }
};
</script>

<style scoped>
.slide-to-up {
    height: 70vh;
    transition: height 2s;
}
.slide-to-down {
    height: 0;
    transition: height 2s;
}
</style>>