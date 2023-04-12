<template>
  <div 
    class="relative flex w-full space-x-2 transition duration-200 cursor-pointer hover:shadow-xl md:hover:shadow-none"
    data-aos="fade-up" 
    data-aos-easing="ease-in-out"
    :data-aos-delay="100 * index"
  >
    <!-- Image -->
    <div class="absolute md:relative w-full transition duration-200 rounded-sm shadow-md h-full md:h-52 md:w-3/5 lg:w-3/5 lg:h-80" @mouseover="imageMousedOver" @mouseout="imageMousedOut">
      <img :src="image" class="object-cover object-center w-full h-full rounded-sm" :alt="project.title"/>
      <div 
        class="absolute inset-0 transition duration-200 rounded-sm bg-dark-navy bg-opacity-90 md:bg-opacity-20"
        :class="[imageHovered ? 'md:bg-transparent' : 'md:bg-success']"
      >
      </div>
    </div>

    <!-- Content -->
    <div  class="relative md:absolute z-10 flex flex-col h-full p-14 md:-mt-10 space-y-4 md:items-end md:top-0 md:right-0 md:w-3/4 lg:w-1/2 md:p-0">
      <!-- Title -->
      <div class="flex flex-col items-start space-y-2 md:items-end">
        <span class="font-mono text-xs tracking-wider" :class="{'text-success': mode === 'dark', 'text-success md:text-dark-navy': mode === 'light'}">Exclusive Project</span>
        <h6 class="text-2xl font-bold text-white capitalize transition duration-200 md:w-full md:text-right " :class="{'hover:text-success md:text-lightest-slate': mode === 'dark', 'hover:text-dark-navy md:text-light-navy': mode === 'light'}">{{ project.title }}</h6>
      </div>
      
      <!-- Description -->
      <div class="text-sm font-light tracking-wide text-left transition duration-200 rounded-sm shadow-sm cursor-pointer md:text-base md:p-8 md:text-right text-lightest-slate md:bg-light-navy hover:shadow-xl">
        {{ project.content }}
      </div>
      
      <!-- Technologies -->
      <div class="flex flex-wrap w-full font-mono text-xs md:text-sm md:justify-end ">
        <span class="mb-2 mr-3" v-for="(technology, index) in project.technologies" :key="index" :class="{'text-lightest-slate': mode === 'dark', 'text-lightest-slate md:text-dark-navy': mode === 'light'}">{{technology }}</span>
      </div>

      <!-- Icons -->
        <div class="flex items-center w-full space-x-4 text-lg md:justify-end">
            <a v-for="(link, index) in project.links" class="transition duration-200 " :class="{'hover:text-success text-lightest-slate': mode === 'dark', 'md:hover:text-dark-navy hover:text-success text-lightest-slate md:text-light-navy': mode === 'light'}" :key="index" :href="link.url" target="_blank">
              <span v-if="link.url" :class="link.icon"></span>
            </a>
        </div>
      
    </div>

  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'StarredProject',
  props: ['project', 'index'],
  setup(props) {
    const store = useStore()
    const imageHovered = ref(false)

    const mode = computed(() => store.getters.getMode)

    const imageMousedOver = () => imageHovered.value = true
    const imageMousedOut = () => imageHovered.value = false
    

    const image = computed(() => {
      if (props.project.title == 'E-Commerce Application With Integrated Payment Gateway') {
        return '/assets/projects/justbuy.png'
      } else if (props.project.title == 'Madam Boutique Online Store ') {
        return '/assets/projects/madam-boutique.png'
      } else if (props.project.title == 'Golfor Integrated Services - Your One-Stop Shop for Forex and E-commerce') {
        return '/assets/projects/golfor-integrated-services.png'
      } else if (props.project.title == 'BirBur - The Ultimate Car Booking Platform') {
        return '/assets/projects/birbur.png'
      } else if (props.project.title == 'Your Mental Insight: Advanced Electronic Assessments for Informed Mental Health Care') {
        return '/assets/projects/your-mental-insight.png'
      } else if (props.project.title == 'AcrossTheHorizon: Study Abroad Experts') {
        return '/assets/projects/across-the-horizon.png'
      } else if (props.project.title == 'Peexoo: Empowering Content Creators') {
        return '/assets/projects/peexoo.png'
      }
    })

    return {
      imageHovered,
      mode,
      imageMousedOver,
      imageMousedOut,
      image
    }
  }
}
</script>