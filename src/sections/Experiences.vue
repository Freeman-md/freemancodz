<template>
  <div class="flex flex-col space-y-10">

    <!-- Header -->
    <div class="flex flex-col items-center justify-center space-y-1">
      <h6 class="text-5xl font-bold uppercase font-title">Experience</h6>
      <div class="flex items-center justify-center w-1/6">
        <div class="w-1/6 border-b-4 border-black"></div>
      </div>
    </div>

    <Experience v-for="(experience, index) in experiences" :key="index" :experience="experience"/>

  </div>
</template>

<script>
import Experience from '../components/Experience.vue';
export default {
  components: { Experience },
  data() {
    return {
      experiences: [
        {
          image: '', 
          title: 'E-Commerce Application', 
          subtitle: 'Personal Project',
          description: 'Justbuy is Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor Lorem ipsum Dolor', 
          links: [
            {
              name: '', 
              link: ''
            }
          ]
        }
      ],
    };
  },
}
</script>