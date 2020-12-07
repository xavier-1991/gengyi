<template lang="pug">
  div.re
    div(class="swiper-container" v-if="1")
      div(class="swiper-wrapper")
        div(class="swiper-slide"  @click="toDetail")
          img(src="../../static/images/01.jpg")
        div(class="swiper-slide" @click="toDetail")
          img(src="../../static/images/02.jpg")
        div(class="swiper-slide" @click="toDetail")
          img(src="../../static/images/03.jpg")
        div(class="swiper-slide" @click="toDetail")
          img(src="../../static/images/04.jpg")
        div(class="swiper-slide" @click="toDetail")
          img(src="../../static/images/05.jpg")
        div(class="swiper-slide" @click="toDetail")
          img(src="../../static/images/06.jpg")
      div(class="swiper-pagination")
    div.imgList(style="margin-top:20px;")
      div.title.df.ai-center
        span 最新文章
        span 云想衣裳花想容
      div.p10.df.fw
        div.img-item(v-for="item in 6"  @click="toDetail")
          img(src="../../static/images/01.jpg")
          div.df.ai-center
            p.textFlow2 文章标题文章标题
    div.all-bottom
      Bottom
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import vueWaterfallEasy from 'vue-waterfall-easy'
import Bottom from '@/layout/bottom'
import { setCss } from '@/utils/set-css'
export default {
  components: {
    vueWaterfallEasy,
    Bottom
  },
  data() {
    return {
      innerWidth: window.innerWidth || 0
    }
  },
  created() {
    setCss({
      'html': { height: 'auto' },
      'body': { height: 'auto' },
      '#app': { height: 'auto' },
      '.all-wrap': { height: 'auto' },
      '.all-main': { height: 'auto' }
    })
    window.onresize = () => {
      this.innerWidth = window.innerWidth
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 5000
      },
      slidesPerGroup: innerWidth < 800 ? 1 : 3,
      slidesPerView: innerWidth < 800 ? 1 : 3, // 显示的数量
      spaceBetween: 10, // 每张的间距
      pagination: { el: '.swiper-pagination' }
    })
  },
  methods: {
    getData() {
      // this.imgArr=
    },
    toDetail() {
      this.$router.push('detail')
    }
  }
}
</script>
<style>
@import "./index.css"
</style>
