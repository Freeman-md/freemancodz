<template>
  
  <Loader v-if="loading"/>
  <div v-else class="w-full h-full transition duration-200" id="home" :class="{'bg-navy': mode === 'dark'}">
    

    <Header />

    <Background />

    <About />

    <Skills />

    <!-- <Interests /> -->

    <!-- Starred Projects -->
    <StarredProjects />

    <!-- <Projects /> -->

    <Footer />

  </div>
  
</template>

<script>
import {mapGetters} from 'vuex'

import Loader from './sections/Loader.vue'
import Header from './sections/Header.vue'
import Background from './sections/Background.vue'
import About from './sections/About.vue'
import Skills from './sections/Skills.vue'
import Interests from './sections/Interests.vue'
import StarredProjects from './sections/StarredProjects.vue'
import Projects from './sections/Projects.vue'
import Footer from './sections/Footer.vue'

// import Experiences from './sections/Experiences.vue'
export default {
  components: { Loader, Header, Background, About, Skills, Interests, StarredProjects, Projects, Footer },
  created() {
    this.$store.commit('setTabContent', {value: 'languages'})
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeCreate() {
    this.$store.dispatch('getProjects')
  },
  methods: {
    handleScroll() {
      const about = document.getElementById('about')
      const experience = document.getElementById('experience')
      const work = document.getElementById('work')
      const contact = document.getElementById('contact')

      if (window.pageYOffset >= about.offsetTop && window.pageYOffset < experience.offsetTop) {
        this.$store.commit('setActiveLink', {link: 'about'}) 
      } else if (window.pageYOffset >= experience.offsetTop && window.pageYOffset < work.offsetTop) {
        this.$store.commit('setActiveLink', {link: 'experience'}) 
      } else if (window.pageYOffset >= work.offsetTop && window.pageYOffset < contact.offsetTop) {
        this.$store.commit('setActiveLink', {link: 'work'}) 
      } else if (window.pageYOffset >= contact.offsetTop) {
        this.$store.commit('setActiveLink', {link: 'contact'}) 
      } else {
        this.$store.commit('setActiveLink', {link: ''}) 
      }
      
    }
  },
  computed: {
    ...mapGetters({
      mode: 'getMode',
      loading: 'getLoading'
    }),
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
