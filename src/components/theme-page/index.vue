<template lang="pug">
  div.re(style="height:100%;padding-top:80px;box-sizing:border-box")
    div(style="height:100%")
      vue-waterfall-easy(ref="waterfall" :imgsArr="imgArr" @scrollReachBottom="getData" @scrollNoReachBottom="hideBottom" @click="toDetail")
        .img-info(slot-scope="props")
          p.some-info 第{{props.index+1}}张图片
          p.some-info {{props.value.info}}
    div.all-bottom(v-if="bottomShow")
      Bottom
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import Bottom from '@/layout/bottom'
import { setCss } from '@/utils/set-css'
export default {
  components: {
    vueWaterfallEasy,
    Bottom
  },
  props: {
    pageType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imgArr2: [
        {
          'src': 'https://static.hanfuwang.com/wp-content/uploads/2020/03/1f56ee6db109ae.jpg?x-oss-process=image/resize,m_fill,h_678,w_989',
          'href': 'https://www.baidu.com',
          'info': '一些图片描述文字'
        },
        {
          'src': 'https://static.hanfuwang.com/wp-content/uploads/2020/03/19185e4757c3e5.jpg',
          'href': 'https://www.baidu.com',
          'info': '一些图片描述文字'
        }
      ],
      imgArr: [],
      group: 0, // 当前加载的加载图片的次数
      bottomShow: false
    }
  },
  created() {
    setCss({
      'html': { height: '100%' },
      'body': { height: '100%' },
      '#app': { height: '100%' },
      '.all-wrap': { height: '100%' },
      '.all-main': { height: '100%' }
    })
    console.log('pageType', this.pageType)
  },
  mounted() {
    this.imgArr3 = []
    for (let i = 0; i < 10; i++) {
      this.imgArr3.push(...this.imgArr2)
    }

    this.imgArr.push(...JSON.parse(JSON.stringify(this.imgArr3)))
    console.log(this.imgArr)
  },
  methods: {
    getData() {
      this.group++
      if (this.group >= 2) {
        this.$refs.waterfall.waterfallOver()
        this.$nextTick(() => {
          this.bottomShow = true
        })
        return
      }
      for (let i = 0; i < 10; i++) {
        this.imgArr3.push(...this.imgArr2)
      }
      this.imgArr.push(...JSON.parse(JSON.stringify(this.imgArr3)))
    },
    hideBottom(e) {
      console.log(e)
      this.bottomShow = false
    },
    toDetail(ev, { index, value }) {
      ev.preventDefault()
      console.log(value)
      this.$router.push('detail')
    }
  }
}
</script>
<style>
html,
body,
.all-wrap,
.all-main,
#app {
  height: 100%;
}
a {
  color: #000;
  text-decoration: none;
}
.some-info {
  line-height: 1.6;
  text-align: center;
}
.vue-waterfall-easy-container > .loading.ball-beat > .dot{
  background-color: #ef746a !important;
}
.vue-waterfall-easy-container .vue-waterfall-easy .over{
  padding: 15px 0;
  font-size: 15px !important;
}
</style>
