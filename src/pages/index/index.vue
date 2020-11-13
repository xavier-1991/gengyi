<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../static/images/01.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/02.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/03.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/04.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/05.jpg">
      </div>
      <div class="swiper-slide">
        <img src="../../static/images/06.jpg">
      </div>
    </div>
    <div class="swiper-pagination" />
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data() {
    return {

    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 5000
      },
      slidesPerGroup: 3,
      slidesPerView: 3, // 显示的数量
      spaceBetween: 10, // 每张的间距
      pagination: { el: '.swiper-pagination' }
    })
  }
}
</script>
<style>
  .swiper-slide{
    width: 33%;
    height: 400px;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #ef746a !important;
    background-color: #ef746a !important;
  }

</style>
