<template>
  <div id="about" class="pt-28 mt-24 sm:pt-22 responsive-container" data-aos="fade-up" data-aos-easing="ease-in-out">
    <div class="flex flex-col items-center mx-auto space-y-10 md:items-start md:justify-around md:flex-row md:w-3/4">

      <div class="flex-col space-y-5 text-base sm:text-lg md:w-3/5" :class="{'text-slate': mode === 'dark', 'text-navy': mode === 'light'}">
        
        <!-- Title -->
        <Title :data="{index: '01.', text: 'About Me'}" />

        <h4 class="pt-5">
          Hello! Freeman here, and I like to make things that are useful to humanity. When I read a Web Style Cookbook in 2019 about the fundamentals of HTML & CSS, I became interested in web development. It turns out, however, that putting together the structure and design of webpages taught me a lot about HTML & CSS!
        </h4>

        <h6>
          Fast-forward to today, I've had the honour of attending Middlesex University in London to study information technology. Building distinctive, accessible products and digital experiences for the benefit of society is my major emphasis right now.
        </h6>

        <span>Here are a few technologies I've been working with recently: </span>

        <div class="grid justify-between grid-cols-2 gap-y-2 text-md">
          <div class="flex items-center space-x-1" v-for="(technology, index) in technologies" :key="index" :class="{'text-success': mode === 'dark', 'text-dark-navy': mode === 'light'}">
            <span class="text-smallest far fa-arrow-alt-circle-right" ></span>
            <span class="text-sm" :class="{'text-slate': mode === 'dark', 'text-light-navy': mode === 'light'}">{{technology}}</span>
          </div>
        </div>
        
      </div>

      <div class="md:pl-4 md:w-2/5">
        <div class="relative rounded-full w-72 h-72 sm:h-80 sm:w-80 md:w-60 md:h-60 lg:h-72 lg:w-72 overflow-hidden" data-aos="fade" data-aos-delay="100" data-aos-easing="ease-in-out">
          <div class="absolute inset-0 transition duration-200 rounded-full cursor-pointer bg-opacity-60 hover:bg-opacity-0" :class="{'bg-success': mode === 'dark', 'bg-navy': mode === 'light'}"></div>
          <img src="/assets/me.jpeg" class="w-full h-full transition duration-200 rounded-full cursor-pointer object-cover" :class="{'filter': grayscale, 'filter-none grayscale-0' : !grayscale}" @mouseover="grayscale = false" @mouseout="grayscale = true" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Title from './Title.vue'
export default {
  components: { Title },
  data: () => ({
    technologies: ['Laravel', 'REST API\'s', 'Inertia Js', 'Vue', 'Livewire', 'Alpine JS'],
    grayscale: true
  }),
  computed: {
    ...mapGetters({
      mode: 'getMode'
    })
  }
}
</script>