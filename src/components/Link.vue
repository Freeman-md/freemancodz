<template>
  <a @click="closeBar" v-scroll-to="url" data-aos="slide-down" data-aos-easing="linear" :data-aos-delay="50 * index" class="px-4 py-2 transition duration-200 cursor-pointer focus:border focus:border-dashed hover:text-success focus:text-success border-success focus:outline-none" :class="classes">
    <span class="font-mono tracking-wider text-success" :class="mode === 'dark' ? 'text-success' : 'text-navy'">{{link.number}}</span>
    <span class="font-mono tracking-wider" :class="{'text-success': this.active && mode === 'dark', 'text-navy': this.active && mode === 'light', 'text-dark-slate': mode === 'light'}">{{link.name}}</span>
  </a>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['link', 'classes', 'index'],
  computed: {
    url() {
      return `#${this.link.name.toLowerCase()}`
    },
    active() {
      return this.$store.state.activeLink == this.link.name.toLowerCase()
    },
    ...mapGetters({
      mode: 'getMode'
    })
  },
  methods: {
    closeBar() {
      if (window.innerWidth <= 768) {
        this.$store.commit('toggle')
      }
    }
  },
}
</script>