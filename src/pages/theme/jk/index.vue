<template lang="pug">
  themePage(:pageType="type")
</template>

<script>
import themePage from '@/components/theme-page'
export default {
  components: {
    themePage
  },
  data() {
    return {
      type: ''
    }
  },
  created() {
    this.type = this.$route.name
  }
}
</script>

