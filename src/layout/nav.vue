<template lang="pug">
  div
    div.nav-wrap
      div.wp100.hp100.df.jcc
        div.nav.df.jcc.ai-center.re
          div.nav-item.curr-item() 精选
          div.nav-item() 明星
          div.nav-item() 汉服
          div.nav-item() jk
          div.nav-item() 旗袍
          div.nav-item() 洛丽塔
          div.nav-item() 兽装
          div.nav-item() 其他
          div.logo 更衣


    
    
</template>

<script>
export default {
  
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
