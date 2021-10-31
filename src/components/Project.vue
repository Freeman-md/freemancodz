<template>
  <div 
    data-aos="zoom-in" 
    data-aos-easing="linear"
    :data-aos-delay="100 * index"
    class="w-full p-8 transition duration-200 transform rounded-md cursor-pointer hover:-translate-y-1 bg-light-navy hover:bg-dark-navy" 
    @mouseover="lighten = true" 
    @mouseleave="lighten = false"
  >
    <div class="flex flex-col items-start w-full space-y-20">
      
      <div class="flex flex-col w-full space-y-8">
        <!-- Icons -->
        <div class="flex items-center justify-between flex-grow w-full">
          <span class="far fa-folder fa-2x text-success"></span>
          <div class="flex space-x-4">
            <a v-for="(link, index) in project.links" :key="index" :href="link.url" class="text-light-slate" target="_blank">
              <span :class="link.icon"></span>
            </a>
          </div>
        </div>

        <div class="flex flex-col space-y-3">
          <!-- Title -->
          <h6 class="text-lg font-bold capitalize transition duration-200" :class="{'text-success': lighten, 'text-lightest-slate': !lighten}">{{ project.title }}</h6>

          <!-- Content -->
          <p class="text-base font-semibold leading-5 text-slate">{{project.content}}</p>
        </div>
      </div>

      <!-- Technologies -->
      <div class="flex flex-wrap w-full">
        <span class="mb-2 mr-3 font-mono text-xs text-slate" v-for="(technology, index) in project.technologies" :key="index">{{technology}}</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['project', 'index'],
  data: () => ({
    lighten: false,
  }),
  methods: {
    lightenText() {
      this.lighten = !this.lighten
    }
  }
}
</script>