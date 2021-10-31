<template>
  <div class="fixed z-40 w-full" :class="{'shadow-lg backdrop-filter backdrop-blur bg-opacity-80': scrolled, 'bg-light-navy': mode === 'dark', 'bg-white' : mode === 'light'}">
    <Sidebar v-show="sidebar"/>
    <div class="flex items-center justify-between w-full py-5 transition duration-300 responsive-container">

      <!-- Logo -->
      <img :src="mode === 'dark' ? '/assets/logo.png' : '/assets/dark-logo.png'" class="-mx-2 w-11 h-11" data-aos="fade" data-aos-easing="ease-in-out" data-aos-delay="350" v-scroll-to="home" />

      <!-- Navigation Links -->
      <div class="items-center hidden text-sm capitalize md:flex text-lightest-slate">
        <Link v-for="(link, index) in links" :key="index" :link="link" :index="index" />
        <Resume data-aos="slide-down" data-aos-easing="linear" data-aos-delay="250" classes="btn-sm"/>
      </div>

      <!-- Mobile Nav Links -->
      <div class="block md:hidden" data-aos="fade" data-aos-easing="ease-in-out" data-aos-delay="350" >
        <button @click.prevent="toggle" class="focus:outline-none" :class="mode === 'dark' ? 'text-success' : 'text-navy'">
          <span class="text-2xl cursor-pointer fa fa-align-right"></span>
        </button>

        <Sidebar v-show="sidebar" />
      </div>

    </div>
  </div>
</template>

<script>
import Link from '../components/Link.vue'
import Sidebar from '../components/Sidebar.vue'
import Resume from '../components/Resume.vue'
import {mapGetters} from 'vuex'

// Asset Images


export default {
  components: { Link, Sidebar, Resume },
  data() {
    return {
      scrolled: false,
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.scrolled = true 
      } else {
        this.scrolled = false
      }
    },
    toggle() {
      this.$store.commit('toggle')
    }
  },
  computed: {
    ...mapGetters({
      mode: 'getMode',
      sidebar: 'getSidebar',
      links: 'getLinks',
    }),
    home() {
      return '#home'
    }
  }
  
}
</script>