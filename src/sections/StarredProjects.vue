<template>
  <div class="flex flex-col w-full mt-12 space-y-16 md:space-y-24 md:w-3/4 lg:w-5/6 responsive-container pt-28" id="work">
    
    <div class="lg:w-2/3 md:w-3/4">
      <Title :data="{index: '03.', text: `Some things I've built`}" />
    </div>

    <div class="flex flex-col space-y-16 md:space-y-24 ">
      <StarredProject 
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
        :index="++index"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Title from './Title.vue'
import StarredProject from '../components/StarredProject.vue'
export default {
  name: 'StarredProjects',
  components: {
    Title,
    StarredProject
  },
  computed: {
    projects() {
      return this.$store.getters.getProjects.filter(project => project.starred == true)
    }
  }
}
</script>
