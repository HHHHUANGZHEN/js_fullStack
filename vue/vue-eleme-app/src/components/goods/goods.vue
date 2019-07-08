<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <!-- key是dom结构里的唯一标识，不能重复 -->
        <li v-for="(item, index) in goods" 
        :key="index"
        @click="selectMenu(index, $event)"
        class="menu-item"
        :class="{'current': currentIndex === index}">
          <span class="text border-1px">
            <!-- 用v-show来判断数据源里的type是否大于0来增加图标 -->
            <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
            {{item.name}}           
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="(item, index) in goods" 
        :key="index" class="food-list" 
        ref="foodList">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="(food, index) in item.foods" :key="index" class="food-item border-1px"
            @click="selectFood(index, $event)">
              <div class="icon">
                <img :src="food.icon" alt="" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food" @add="addFood"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart ref="shopcart" :selectFoods="selectFoods"
    :deliveryPrice="seller.deliveryPrice"
    :minPrice="seller.minPrice"
    ></shopcart>
  </div>
</template>

<script>
import BScroll from 'better-scroll' //从node_modules中引入的，不需要./
import cartcontrol from '@/components/cartcontrol/cartcontrol'
import shopcart from '@/components/shopcart/shopcart'
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      classMap: [],
      listHeight: [],
      scrollY: 0
    }
  },
  components: {
    cartcontrol,
    shopcart
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach(good => {
        good.foods.forEach(food => {
          if(food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  created() {
    // 数组 类名
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];

    this.$http.get('https://www.easy-mock.com/mock/5d01b444d75bbf0fd8c88d19/vue-eleme/vue-eleme-goods')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.goods = res.data.data
          this.$nextTick(() => { //保证html渲染完成才能执行（只有template模板编译成功后，里面的方法才会被调用）
            this._initScroll() //从接口里拿到数据传给数据源，立即调用这个方法
            this._calculateHeight()
          })        
        }
      })
  },
  methods: {
    // 私有方法
    _initScroll () {
      // new BScroll()里面的参数，作用于哪个容器   ref在js里要加s，获取dom结构
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsSroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        //  probeType 类型：Number 默认值：0 可选值：1、2、3
        // 作用：有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，
        //  而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
        probeType: 3
      })
      // .on方法分发一个事件
      this.foodsSroll.on('scroll', pos => {
        console.log(pos)
        // Math.abs计算小数的精度
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    selectMenu (index, event) {
      // console.log(index, event)
      // _constructed是vue的点击事件有的属性
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.foodList
      // console.log(foodList)
      let el = foodList[index]
      // console.log(el)
      // 让右边的页面滚动到菜单 300是时长
      this.foodsSroll.scrollToElement(el, 300)
    },
    _calculateHeight () {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i <foodList.length; i++) {
        // i是下标
        let item = foodList[i]
        height += item.clientHeight  //clientHeight获取dom结构的高度
        this.listHeight.push(height)
      }
    },
    addFood (target) {
      this._drop(target)
    },
    _drop(target) {
      this.$nextTick(() => {
        
      })
    }
  }
 }
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin.styl' 
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    // 宽度占父容器的80px
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      // 设置为表格，表格自带css的属性
      display table 
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      // &数组符号，当前点中的
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #ffffff
        font-weight 700
      .text
          border-none()
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7,17,27,0.1))
          font-size 12px
          .icon
            display inline-block
            vertical-align top
            width 12px
            height 12px
            margin-right 2px
            background-size 12px 12px
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount 
              bg-image('discount_3')
            &.guarantee 
              bg-image('guarantee_3')
            &.invoice 
              bg-image('invoice_3')           
            &.special 
              bg-image('special_3')
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7  
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      border-1px(rgba(7, 17, 27, 0.1))  
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rbg(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px

</style>
