<template lang="pug">
  div.all-wrap
    div
      Nav
    div.all-main
      router-view

  </div>
</template>

<script>
import Nav from './nav'
import Bottom from './bottom'
export default {
  components: {
    Nav,
    Bottom
  }
}
</script>

<style scoped>

</style>
