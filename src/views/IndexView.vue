<template>
  <div  class="bg-yellow-500 h-full border text-center fixed w-full">
    <div class="flex justify-center py-10">
      <img
        src="https://upload.wikimedia.org/wikipedia/th/d/d0/Dogecoin_Logo.png"
        alt=""
      />
    </div>
    <div class="h-1/2 mt-52">
      <!-- <span @click="next()" class="border rounded-full p-3 bg-blue-400 text-white"
        >Next page</span> -->
        <router-link 
        to ="/sign-in" class="border rounded-full p-3 bg-blue-400 text-white"
        >Next page</router-link>
    </div>
  </div>
</template>

<script>

export default {
    data () {
        return { msg : 'hello index'}
    },
};

</script>

<style lang="scss" scoped>
</style>