<template>
  <div class="main">
    <div class="ratings">
      <!-- 评分 -->
      <div class="header">
        <div class="left-detail">
          <div class="left-item left-item__1">{{seller.score}}</div>
          <div class="left-item left-item__2">综合评分</div>
          <div class="left-item left-item__3">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="right-detail">
          <div class="right-item__1">
            <span class="pingfen">服务态度</span>
            <v-star :size="36" :score = "seller.serviceScore" style="display:inline-block;margin-right:8px;"></v-star>              
            <span class="scoreRight">{{seller.serviceScore}}</span>
          </div>
          <div class="right-item__1">
            <span class="pingfen">商品评分</span>
            <v-star :size="36" :score = "seller.foodScore" style="display:inline-block;margin-right:8px;"></v-star>
            <span class="scoreRight">{{seller.foodScore}}</span>
          </div>
          <div class="right-item__1">
            <span class="pingfen">送达时间</span>
            <span class="arriveTime">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <!-- 评价 -->
      <div class="body">
        <div class="lable">
          <span class="biaoqian l1">全部 {{all}}</span>
          <span class="biaoqian l2">满意 {{satisfaction}}</span>
          <span class="biaoqian l3">不满意 {{dissatisfaction}}</span>
        </div>
        <div class="selectComment">
          <i></i>
          <span>只看有内容的评价</span>
        </div>
        <div class="commentDetail">
          <ul>
            <li v-for="(item, index) in ratings" :key="index">
              <div class="avatar">
                <img :src="item.avatar" alt="" width="20" height="20">
              </div>
              <div class="right">
                <div class="line1">
                  <span class="username">{{item.username}}</span>
                  <span class="rateTime">{{new Date(item.rateTime).toLocaleString('zh', { hour12: false })}}</span>
                </div>
                <div class="line2">
                  <v-star :size="24" :score = "seller.serviceScore"></v-star>                
                  <span>{{item.deliveryTime}}</span>
                </div>
                <div class="line3">
                  <p class="text">{{item.text}}</p>
                </div>
                <div class="line4">
                  <i></i>
                  <span v-for="(good, index) in item.recommend" :key="index">{{good}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "@/components/star/star.vue";
export default {
  name: "Ratings",
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      ratings: []
    };
  },
  components: {
    "v-star": star
  },
  computed: {
    all() {
    },
    satisfaction() {},
    dissatisfaction() {},
  },
  created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5d00f4fa294a6f025a3f9913/eleme-app/eleme-app-rating"
      )
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.ratings = Object.assign({}, this.ratings, res.data.data)
        }
      });
  }
};
</script>

<style lang="stylus" scoped>
.main
  background-color #f1f4f6
  .header
    background-color #fff
    display flex
    padding 20px 10px
    border-bottom 1px solid #dcdedd
    .left-detail
      flex-grow 1
      align-content center
      .left-item
        align-items center
        padding-bottom 6px
        &:last-child
          padding-bottom 0
      .left-item__1
        font-size 24px
        color #fda54c
      .left-item__2
        font-size 12px
        color #000
      .left-item__3
        font-size 1px
        color #adb2b3
    .right-detail
      font-size 0
      flex-grow 2
      .right-item__1
        font-size 12px
        padding-bottom 12px
        &:last-child
          padding-bottom 0
        .pingfen
          padding-right 8px
        .scoreRight
          color #fda54c
        .arriveTime
          color #abb2b3
  .body
    background-color #fff
    margin-top 18px
    border-top 1px solid #dcdedd
    border-bottom 1px solid #dcdedd
    .lable
      margin 0 16px
      padding 16px 0
      border-bottom 1px solid #dcdedd
      .biaoqian
        padding 6px 8px
        font-size 14px
        margin-right 6px
      .l1
        background-color #0098d6
        color #fff
      .l2
        background-color #ccebfb
        color #000
      .l3
        background-color #d9dcdc
        color #000
    .selectComment
      padding 14px
      font-size 14px
      color #abb2b3
</style>
