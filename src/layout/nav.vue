<template lang="pug">
  div
    div.nav-wrap
      div.wp100.hp100.df.jcc
        div.nav.df.jcc.ai-center.re
          div(@click="toTheme(0)" :class="['nav-item',currNav==='jingxuan'?'curr-item':'']") 精选
          div.nav-item(@click="toTheme('star')" :class="['nav-item',currNav==='star'?'curr-item':'']") 明星
          div.nav-item(@click="toTheme('hanfu')" :class="['nav-item',currNav==='hanfu'?'curr-item':'']") 汉服
          div.nav-item(@click="toTheme('jk')" :class="['nav-item',currNav==='jk'?'curr-item':'']") jk
          div.nav-item(@click="toTheme('qipao')" :class="['nav-item',currNav==='qipao'?'curr-item':'']") 旗袍
          div.nav-item(@click="toTheme('lolita')" :class="['nav-item',currNav==='lolita'?'curr-item':'']") 洛丽塔
          div.nav-item(@click="toTheme('shouzhuang')" :class="['nav-item',currNav==='shouzhuang'?'curr-item':'']") 兽装
          //- div.nav-item(@click="toTheme(7)") 其他
          div.logo 更衣
</template>

<script>
export default {
  data() {
    return {
      currNav: ''
    }
  },
  created() {
    this.currNav = this.$route.name
  },
  methods: {
    toTheme(type) {
      if (type === 0) {
        this.currNav = 'jingxuan'
        this.$router.push({ name: 'index' })
      } else {
        this.currNav = type
        this.$router.push({ name: type })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-wrap{
    width:100%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    height: 65px;
    position: fixed;
    left: 0;
    top:0;
    z-index: 100;
    background: #fff;
  }
  .logo{
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 26px
  }
  .nav{
    width:1200px;
    height: 100%;
  }
  .nav-item{
    color:#333;
    font-size: 12px;
    font-weight: 600;
    padding: 15px 22px;
    cursor: pointer;
  }
  .nav-item:hover{
    color:#ef746a;
  }
  .curr-item{
    color:#ef746a;
  }
</style>
