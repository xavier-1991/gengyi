<template lang="pug">
  div(v-html="data" style="max-width:1200px;margin:80px auto 20px;text-align:center")
</template>

<script>
export default {
  data() {
    return {
      type: '',
      data: `<p style="text-indent:2em;">
	<strong><span style="font-size:18px;">女星穿搭示范</span></strong>
</p>

<div class="editer_pic">
	<img src="http://wear.zuolinju.com/wp-content/uploads/2020/11/frc-28fd9952f7ac02039abeb356f1d14a89.jpg"><i>曾之乔</i> 
</div>
<p style="text-indent:2em;">
	还记得《爱情魔发师》里的小贝吗？如今的曾之乔，可真是太美了。
</p>
<p style="text-indent:2em;">
	刚和辰亦儒官宣不久的她，参加活动时的气质，真的太让人羡慕！
</p>
<div class="editer_pic">
	<img src="http://wear.zuolinju.com/wp-content/uploads/2020/11/frc-39bde4bcab4fd9a42ca6ac9c874f3327.jpg"><i>沈梦辰</i> 
</div>
<p style="text-indent:2em;">
	对自己身材很自信的女生，可以像沈梦辰这样，穿一件颜色鲜艳的背带裤，减龄又可爱。
</p>
<div class="editer_pic">
	<img src="http://wear.zuolinju.com/wp-content/uploads/2020/11/frc-1ff983dbd68e6597112c9b462bcb1121.jpg"><i>赵今麦</i> 
</div>
<p style="text-indent:2em;">
	在《潮流合伙人》中，细腻又感性的赵今麦，让大家印象深刻。
</p>
<p style="text-indent:2em;">
	如今的赵今麦，演技和颜值双双在线，未来可期的小演员一枚。
</p>
<div class="editer_pic">
	<img src="http://wear.zuolinju.com/wp-content/uploads/2020/11/frc-cdf495970029fb888208ba2e99f15e0e.jpg"><i>张雪迎</i> 
</div>
<p style="text-indent:2em;">
	剪了短发后的张雪迎，比长头发时更率性了些。
</p>
<p style="text-indent:2em;">
	如果说，以前是走清纯可爱路线，那么现在，就是在帅气的机车girl路上越走越远。
</p>
<div class="editer_pic">
	<img src="http://wear.zuolinju.com/wp-content/uploads/2020/11/frc-81f72a25a51d86cbcecde456425a8df9.jpg"><i>戚薇</i> 
</div>
<p style="text-indent:2em;">
	帅气依旧的戚薇，现在已然是个时尚辣妈。
</p>
<p style="text-indent:2em;">
	经典的黑与白完美搭配，也突出了她的好身材，可见，自律的人才不会输人生。
</p>
<div class="editer_pic">
	<img src="http://wear.zuolinju.com/wp-content/uploads/2020/11/frc-e1a6dfbb6645858788268baa7351a379.jpg"><i>吴昕</i> 
</div>
<p style="text-indent:2em;">
	很多人拿吴昕的年龄说事，可看多了她的街拍，昕姐现在完全是穿搭潮人。
</p>
<p style="text-indent:2em;">
	心态好，喜欢笑，吴昕终会遇到属于她的幸福。
</p>
<div class="editer_pic">
	<img src="http://wear.zuolinju.com/wp-content/uploads/2020/11/frc-e46c535ab51936f922a8c14474f0aec9.jpg"><i>欧阳娜娜</i> 
</div>
<p style="text-indent:2em;">
	欧阳娜娜的穿搭，就比较个性了。黑色的背带裤，显瘦还有型。
</p>
<p style="text-indent:2em;">
	减龄又有型，你的春夏穿搭衣橱中，需要一个背带裤哦！
</p>    

          文章来源于互联网:<a href=http://www.yoka.com/star/roadshow/2020/0309/53887601107818.shtml target="_blank">吴昕看着只有18？背带裤的功劳很大！</a>`
    }
  },
  created() {
    this.type = this.$route.name
  }
}
</script>

