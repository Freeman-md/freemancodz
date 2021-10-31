<template>
  <div class="content-center pt-32 pb-5 mt-20 md:py-32 responsive-container" data-aos="fade-up" data-aos-easing="ease-in-out" id="contact">
    <div class="flex flex-col items-center mx-auto space-y-4 sm:w-1/2">
      <!-- Title -->
      <div class="text-lg" :class="mode === 'dark' ? 'text-success' : 'text-navy'">
        <span class="font-mono tracking-wider">04. </span>
        <span class="font-mono tracking-wider">What's Next</span>
      </div>
      <!-- Heading -->
      <h6 class="text-5xl font-bold text-center capitalize" :class="mode === 'dark' ? 'text-lightest-slate' : 'text-navy'">Get In Touch</h6>
      <!-- Call To Action -->
      <div class="pt-14">
        <a href="mailto:freemanmadudili@gmail.com" class="px-8 py-4 rounded-md"
        :class="mode === 'dark' ? 'btn' : 'btn-dark'">
        Say Hello
        </a>
      </div>

      <!-- Social Media Accounts -->
      <div class="flex flex-col pt-10 space-y-6 md:hidden">

        <div class="flex items-center justify-center space-x-10 text-xl" :class="mode === 'dark' ? ' text-light-slate' : 'text-dark-slate'">
          <a 
            class="cursor-pointer" 
            :href="icon.link" 
            v-for="(icon, index) in socialAccounts" :key="index"
            :class="mode === 'dark' ? 'hover:text-success' : 'hover:text-dark-navy'">
            <span 
              class="transition duration-200 cursor-pointer" :class="icon.name" 
            >
            </span>
          </a>
        </div>

      </div>

      <!-- Github Link To Code Repository -->
      <div class="pt-20 md:pt-40">
        <a v-scroll-to="home" class="p-4 font-mono text-xs transition duration-200 border-transparent border-dashed cursor-pointer active:border-success focus:border-success" :class="mode === 'dark' ? 'hover:text-success text-slate' : 'hover:text-dark-navy text-dark-slate'">Designed & Built by Freeman Madudili</a>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      socialAccounts: 'getSocialAccounts',
      mode: 'getMode'
    }),
    home() {
      return '#home'
    }
  }
}
</script>