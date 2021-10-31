<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col justify-between space-y-1 font-mono text-sm transition duration-200 sm:space-x-4 xs:space-x-4 sm:items-center xs:items-center xs:flex-row sm:flex-row" v-for="content in tabContent.content" :key="content.tab" :class="{'text-success': mode === 'dark'}">
      <span class="xs:w-1/4 sm:w-1/4">{{ content.title }}</span>
      <div class="relative flex-grow h-5" :class="mode === 'dark' ? 'bg-dark-slate': 'bg-lightest-slate'">
        <div class="absolute inset-y-0 left-0 transition duration-200" 
        :class="getBarSize(content.value)"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    
  }),
  methods: {
    getBarSize(value) {
      // if (value >= 90) {
      //   return 'right-10'
      // } else if (value >= 80) {
      //   return 'right-20'
      // } else if (value >= 70) {
      //   return 'right-30'
      // } else if (value >= 60) {
      //   return 'right-40'
      // } else if (value >= 50) {
      //   return 'right-50'
      // }
      switch(value) {
        case 90: 
          return `right-6 ${this.mode === 'dark' ? 'bg-success' : 'bg-navy' }`
        case 85: 
          return `right-10 ${this.mode === 'dark' ? 'bg-success' : 'bg-navy' }`
        case 80: 
          return `right-14 ${this.mode === 'dark' ? 'bg-success' : 'bg-navy' }`
        case 75: 
          return `right-1/4 ${this.mode === 'dark' ? 'bg-success' : 'bg-navy' }`
        case 70: 
          return `right-40 ${this.mode === 'dark' ? 'bg-success' : 'bg-navy' }`
        case 65: 
        case 60: 
          return `right-1/3 ${this.mode === 'dark' ? 'bg-success' : 'bg-navy' }`
        case 55: 
        case 50:
          return `right-1/2 ${this.mode === 'dark' ? 'bg-success' : 'bg-navy' }`
      }
    }
  },
  computed: {
    ...mapGetters({
      tabContent: 'getTabContent',
      mode: 'getMode'
    })
  }
}
</script>

<style scoped>
  
</style>