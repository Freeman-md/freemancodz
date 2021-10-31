<template>
  <div @click.self="toggle" class="fixed inset-0 z-50 w-screen h-screen transition duration-100 shadow-lg bg-opacity-70 backdrop-filter backdrop-blur bg-light-navy">

    <transition name="slide">
      <!-- Sidebar Menu -->
      <div class="fixed inset-y-0 right-0 flex items-center justify-center w-4/5 sm:w-3/5" id="sidebar" :class="mode === 'dark' ? 'bg-light-navy' : 'bg-white'">

        <!-- Close Button -->
        <button @click.prevent="toggle" class="fixed focus:outline-none top-3 right-7">
          <span class="text-5xl cursor-pointer" :class="mode === 'dark' ? 'text-success' : 'text-navy'">
            &times;
          </span>
        </button>

        <div class="flex flex-col items-center justify-center space-y-5 text-lg text-lightest-slate">

          <Link v-for="(link, index) in links" :key="index" :link="link" classes="flex flex-col items-center space-y-1" />

          <br>
          <Resume classes="btn-md text-center" />

        </div>

      </div>
    </transition>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Link from './Link.vue'
import Resume from './Resume.vue'

export default {
  components: { Link, Resume },
  methods: {
    toggle() {
      this.$store.commit('toggle')
    }
  },
  computed: {
    ...mapGetters({
      links: 'getLinks',
      mode: 'getMode'
    })
  }
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active
{
    transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
}
</style>