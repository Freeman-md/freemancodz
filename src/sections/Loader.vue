<template>
  <div class="fixed flex items-center justify-center inset-o bg-dark-navy">
    <div class="flex items-center justify-center w-screen h-screen">
      <img src="/assets/spinner.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    number: 1
  }),
  created() {
    // setInterval(() => {
    //   if (this.number == 29) {
    //     this.number = 0
    //   }
    //   this.number++
    // },100)
  },
  
}
</script>

<style>

</style>