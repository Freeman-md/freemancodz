<template>
  <div class="fixed inset-0 z-50 w-screen h-screen transition duration-100 shadow-lg bg-opacity-70 backdrop-filter backdrop-blur bg-light-navy">
    <!--Sidebar with Dimmer -->
    <div class="fixed inset-0 z-40 flex">
      <!-- Sidebar -->
      <div
        class="absolute top-0 z-20 flex h-screen"
        :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
      >

        <!-- Sidebar Content -->
        <div
          ref="content"
          class="flex items-center justify-center overflow-hidden transition-all duration-700 bg-light-navy"
          :class="[mobileNav ? 'max-w-4xl' : 'max-w-0']"
        >

          <div class="flex flex-col space-y-5 text-lg text-lightest-slate">

            <Link v-for="(link, index) in getLinks" :key="index" :link="link" classes="flex flex-col items-center space-y-1" />

            <br>
            <Resume classes="btn-md text-center" />

          </div>
          
        </div>
      </div>

      <transition name="fade">
        <!-- Dimmer -->
        <div
          v-if="dimmer && mobileNav"
          @click="toggle()"
          class="z-10 flex-1 bg-gray-400 bg-opacity-75 active:outline-none"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Link from './Link.vue'
import Resume from './Resume.vue'

export default {
  components: {Link, Resume},
  props: {
    sidebar: {
      default: false,
    } 
  },
  data() {
    return {
      dimmer: true,
      right: true,
      mobileNav: false
    };
  },
  mounted() {
    this.mobileNav = this.getSidebar
  },
  methods: {
    toggle() {
      this.mobileNav = !this.mobileNav
      this.$store.commit('toggle')
    }
  },
  computed: {
    ...mapGetters([
      'getLinks',
      'getSidebar'
    ])
  }
};
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>