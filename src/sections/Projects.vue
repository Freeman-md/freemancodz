<template>
  <div class="w-full mt-12 pt-28 responsive-container" v-if="projects">
    <div class="flex flex-col items-center space-y-10">
      <h6 class="text-2xl font-bold text-center capitalize md:text-3xl" :class="mode === 'dark' ? 'text-lightest-slate' : 'text-navy'">Other Noteworthy Projects</h6>
      <div class="grid space-y-5 md:w-3/4 lg:w-5/6 sm:gap-6 lg:gap-4 lg:grid-cols-3 sm:space-y-0 sm:grid-cols-2">

        <Project v-for="(project, index) in projects" :project="project" :index="++index" :key="index" />

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Project from '../components/Project.vue'
export default {
  components: {Project},
  computed: {
    ...mapGetters({
      mode: 'getMode'
    }),
    projects() {
      return this.$store.getters.getProjects.reverse().filter(project => !project.starred)
    }
  }
}
</script>