<template>
  <div class="flex space-x-4">
    <div id="image" class="w-1/4 h-24">
      
    </div>
    <div class="flex flex-col space-y-1">
      <div class="flex flex-col -space-y-1">
        <h4 class="text-xl font-bold uppercase font-title">{{experience.title}}</h4>
        <h6 class="text-base font-semibold capitalize text-muted">{{experience.subtitle}}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true,
    }
  }
}
</script>