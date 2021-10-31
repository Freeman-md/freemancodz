<template>
  <div class="flex flex-col items-center justify-center w-full h-screen" id="home">

    <!-- Settings -->
    <Settings />

    <!-- Background Introduction -->
    <div class="flex flex-col items-center justify-center h-screen responsive-container">
      
      <div class="flex flex-col items-center justify-center w-full mx-auto mt-24 space-y-6 md:w-4/5">
        <!-- Intro Text -->
        <div class="flex flex-col justify-center h-screen space-y-4">
          <!-- Intro -->
          <div data-aos="fade-up"  data-aos-easing="ease-in-out" data-aos-delay="600">
            <span
             class="py-2 font-mono text-lg rounded-br-2xl rounded-t-2xl bg-primary" :class="mode === 'dark' ? 'text-success' : 'text-navy'">Hi, my name is
             </span>
          </div>
          <!-- Write Up -->
          <div class="flex flex-col space-y-3 sm:space-y-4">
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="700">
              <h1 class="text-3xl font-bold capitalize 2xs:text-4xl xs:text-4xl sm:text-5xl md:text-7xl" :class="mode === 'dark' ? 'text-lightest-slate' : 'text-navy'">Freeman Madudili.</h1>
            </div>
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="800">
              <h3 class="text-3xl font-bold leading-tight 2xs:text-4xl xs:text-4xl sm:text-5xl lg:text-7xl md:text-6xl" :class="mode === 'dark' ? 'text-slate' : 'text-dark-navy'">
                Making great things possible.
              </h3>
            </div>
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="900">
              <h2 class="text-base sm:text-lg sm:w-5/6 md:w-3/5" :class="mode === 'dark' ? 'text-slate' : 'text-dark-navy'">
                I am a results oriented Full Stack Developer, with about 2 years of experience specialising in both front end (TailwindCSS, Vue, Vuex) and back end (mainly PHP and MySQL) web development. I am focused on building (and occasionally designing) exceptional digital experiences as well as building accessible, human-centered products.
              </h2>
            </div>
            <br>
            <div data-aos="zoom" data-aos-delay="1100">
              <a href="mailto:freemanmadudili@gmail.com" class="self-start btn-md " :class="mode === 'dark' ? 'btn' : 'btn-dark'">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Social Media Handles -->
    <SocialMedia/>

    <!-- Email -->
    <Email />

  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Settings from '../components/Settings.vue'
import Icon from '../components/Icon.vue'
import SocialMedia from '../components/SocialMedia.vue'
import Email from '../components/Email.vue'
export default {
  components: {Settings, Icon, SocialMedia, Email},
  data() {
    return {
      icons: [
        {name: 'fab fa-linkedin', color: 'hover:text-linkedin', link: ''},
        {name: 'fab fa-github', color: 'hover:text-black', link: ''},
        {name: 'fab fa-twitter', color: 'hover:text-twitter', link: ''},
        {name: 'fab fa-google', color: 'hover:text-google-blue', link: 'mailto:freemanmadudili@gmail.com'},
      ],
    };
  },
  computed: {
    ...mapGetters({
      mode: 'getMode'
    })
  }
}
</script>