<template lang="pug">
  div
    //- pc端
    div.nav-wrap.nav-wrap-pc
      div.wp100.hp100.df.jcc
        div.nav.df.jcc.ai-center.re
          div(@click="toTheme(0)" :class="['nav-item',currNav==='index'?'curr-item':'']") 精选
          div.nav-item(@click="toTheme('star')" :class="['nav-item',currNav==='star'?'curr-item':'']") 明星
          div.nav-item(@click="toTheme('hanfu')" :class="['nav-item',currNav==='hanfu'?'curr-item':'']") 汉服
          div.nav-item(@click="toTheme('jk')" :class="['nav-item',currNav==='jk'?'curr-item':'']") jk
          div.nav-item(@click="toTheme('qipao')" :class="['nav-item',currNav==='qipao'?'curr-item':'']") 旗袍
          div.nav-item(@click="toTheme('lolita')" :class="['nav-item',currNav==='lolita'?'curr-item':'']") 洛丽塔
          div.nav-item(@click="toTheme('shouzhuang')" :class="['nav-item',currNav==='shouzhuang'?'curr-item':'']") 兽装
          //- div.nav-item(@click="toTheme(7)") 其他
          div.logo 更衣
    //- h5端
    div.nav-wrap.nav-wrap-h5
      div.wp100.hp100.df.ai-center.fldr.re
        div.df.ai-center
          div.menu-icon(@click="showNavH5=!showNavH5")
            div.line-1
            div.line-2
            div.line-3
          div.logo-h5.ml15 更衣
        div.nav-h5(v-if="showNavH5")
          div(@click="toTheme(0)" :class="['nav-item-h5',currNav==='index'?'curr-item-h5':'']") 精选
          div(@click="toTheme('star')" :class="['nav-item-h5',currNav==='star'?'curr-item-h5':'']") 明星
          div(@click="toTheme('hanfu')" :class="['nav-item-h5',currNav==='hanfu'?'curr-item-h5':'']") 汉服
          div(@click="toTheme('jk')" :class="['nav-item-h5',currNav==='jk'?'curr-item-h5':'']") jk
          div(@click="toTheme('qipao')" :class="['nav-item-h5',currNav==='qipao'?'curr-item-h5':'']") 旗袍
          div(@click="toTheme('lolita')" :class="['nav-item-h5',currNav==='lolita'?'curr-item-h5':'']") 洛丽塔
          div(@click="toTheme('shouzhuang')" :class="['nav-item-h5',currNav==='shouzhuang'?'curr-item-h5':'']") 兽装
          div.nav-item-h5.tac.close(@click="showNavH5=false") 关闭

</template>

<script>
export default {
  data() {
    return {
      currNav: 'jingxuan',
      showNavH5: false
    }
  },
  created() {
    this.currNav = this.$route.name
  },
  methods: {
    toTheme(type) {
      if (type === 0) {
        this.currNav = 'index'
        this.$router.push({ name: 'index' })
      } else {
        this.currNav = type
        this.$router.push({ name: type })
      }
      this.showNavH5 = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './css/nav.css'
</style>
