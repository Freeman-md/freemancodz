<template>

  <div class="fixed bottom-0 flex-col items-center hidden space-y-6 text-xl md:flex left-10" data-aos="fade" data-aos-easing="ease-in-out" data-aos-delay="1500">
    <a class="cursor-pointer" :href="icon.link" v-for="(icon, index) in socialAccounts" :key="index" :class="mode === 'dark' ? 'hover:text-success text-light-slate' : 'hover:text-dark-navy text-dark-slate'"><span class="text-default transition duration-200 transform hover:-translate-y-0.5 cursor-pointer" :class="icon.name" ></span></a>
    <div style="width: 0.5px;" class="h-20" :class="mode === 'dark' ? 'bg-light-slate' : 'bg-dark-navy'"></div>
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      socialAccounts: 'getSocialAccounts',
      mode: 'getMode'
    })
  }
}
</script>