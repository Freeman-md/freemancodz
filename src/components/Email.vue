<template>

  <div class="fixed bottom-0 right-0 flex-col items-center hidden space-y-24 text-xl md:flex text-default" data-aos="fade" data-aos-easing="ease-in-out" data-aos-delay="1500">
    <a href="mailto:freemanmadudili@gmail.com" class="text-xs transform rotate-90 cursor-pointer hover:-translate-y-0.5 text-default" :class="mode === 'dark' ? 'hover:text-success text-light-slate' : 'hover:text-dark-navy text-dark-slate'">freemanmadudili@gmail.com</a>
    <div style="width: 0.5px;" class="h-20" :class="mode === 'dark' ? 'bg-light-slate' : 'bg-dark-navy'"></div>
  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({      
      mode: 'getMode'
    })
  }
}
</script>