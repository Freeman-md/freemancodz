<template>
  <li @click="setActiveTab" class="w-full cursor-pointer">
    <div class="w-full px-3 py-3 font-mono tracking-normal text-left transition duration-500 border-b-2 cursor-pointer sm:border-0 sm:border-l-2" :class="{'border-success text-success': activeTab == tab.toLowerCase() && mode === 'dark', 'border-dark-navy text-dark-navy': activeTab == tab.toLowerCase() && mode === 'light', 'border-lightest-navy text-slate hover:text-success hover:bg-lightest-navy': activeTab != tab.toLowerCase() && mode === 'dark', 'border-lightest-slate text-slate hover:bg-lightest-slate hover:text-navy': activeTab != tab.toLowerCase() && mode === 'light'}" @click="setActiveTab">{{tab}}</div>
  </li>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['tab'],
  methods: {
    setActiveTab() {
      this.$store.commit('setActiveTab', {value: this.tab.toLowerCase()})
      this.$store.commit('setTabContent', {value: this.tab.toLowerCase()})
    }
  },
  computed: {
    ...mapGetters({
      activeTab: 'getActiveTab',
      mode: 'getMode'
    })
  }
}
</script>