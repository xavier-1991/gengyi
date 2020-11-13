<template lang="pug">
  div.all-wrap
    div(style="padding-top:65px")
      Nav
    div.all-main
      router-view
    //- div.all-bottom
      Bottom

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
  .all-wrap{
    height: auto;
    min-height: 100%;
  }
  .all-main{
    max-width: 1200px;
    margin: 20px auto 0;
  }
  .all-bottom{
    width: 100%;
    background: #333;
    height: 66px;
    color: #fff;
    font-size: 12px;
  }
</style>
