<template>
  <div>
    <a href="/assets/FreemanMadudili.pdf" target="_blank" class="ml-2" :class="[classes, mode === 'dark' ? 'btn' : 'btn-dark']">Resume</a>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['classes'],
  computed: {
    ...mapGetters({
      mode: 'getMode'
    })
  }
}
</script>