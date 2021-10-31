<template>
  <div id="experience" class="mt-20 pt-28 responsive-container" data-aos="fade-up" data-aos-easing="ease-in-out">
    <div class="space-y-10 md:mx-auto md:w-2/3 lg:w-1/2">

      <div class="flex flex-col space-y-5 text-lg" :class="mode === 'dark' ? 'text-slate' : 'text-navy' ">
        
        <!-- Title -->
        <Title :data="{index: '02.', text: 'My Skills'}" />

        <div class="flex flex-col justify-between space-y-3 sm:flex-row sm:space-y-0" id="tabs">
          
          <!-- Tab Links -->
          <ul class="z-10 flex flex-col items-start justify-start w-auto overflow-auto text-xs">
            <TabLink v-for="(tabLink, index) in tabLinks" :key="index" :tab="tabLink"/>
          </ul>

          <!-- Tab Contents -->
          <div class="px-4 py-1.5 flex flex-col w-full">
            <transition name="tabContent" appear>
              <TabContent />
            </transition>
          </div>

        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Title from './Title.vue'
import {mapGetters} from 'vuex'
import TabLink from '../components/TabLink.vue'
import TabContent from '../components/TabContent.vue'
export default {
  components: { Title, TabLink, TabContent },
  data: () => ({
    tabLinks: ['Languages', 'Front End', 'Back End', 'Databases', 'Tools & Technologies'],
  }), 
  computed: {
    ...mapGetters({
      mode: 'getMode'
    }),
  }

}
</script>

<style>
.tabContent-enter, .tabContent-leave-to  {
  opacity: 0;
}
.tabContent-enter-to, .tabContent-leave{
  opacity: 1;
}
.tabContent-enter-active, .tabContent-leave-active  {
  transition: all 0.3s ease;
}
</style>