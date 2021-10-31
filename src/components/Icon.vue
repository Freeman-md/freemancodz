<template>
  <a :href="icon.link" class="flex items-center justify-center w-12 h-12 text-white transition duration-200 rounded-full cursor-pointer hover:bg-white bg-primary" :class="icon.color">
    <i class="cursor-pointer fa-2x" :class="icon.name"></i>
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true
    }
  }
}
</script>