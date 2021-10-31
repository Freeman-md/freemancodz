<template>
  
    <button @click="toggleMode" class="fixed z-50 w-10 h-10 my-auto transition duration-200 rounded-full shadow-md focus:outline-none right-6 md:right-20" :class="{'bg-white text-dark-navy': mode === 'dark', 'bg-navy text-success': mode === 'light'}">
      <span class="text-sm cursor-pointer fas fa-moon"></span>
    </button>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Settings',
  methods: {
    toggleMode() {
      this.$store.commit('setMode')
    }
  },
  computed: {
    ...mapGetters({
      mode: 'getMode'
    })
  }
}
</script>