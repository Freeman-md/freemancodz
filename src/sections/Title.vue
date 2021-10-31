<template>
  <div class="flex items-center space-x-5">

    <span class="font-mono text-xl" :class="mode === 'dark' ? 'text-success' : 'text-navy'">{{data.index}}</span>
    <span class="text-2xl font-bold md:text-3xl" :class="mode === 'dark' ? 'text-lightest-slate' : 'text-dark-navy'">{{data.text}}</span>
    <div class="flex-grow bg-lightest-navy" style="height: 0.5px"></div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Title',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      mode: 'getMode'
    })
  }
}
</script>