<template>
  <div id="app">
    <!-- header -->
    <div class="header">
      <router-link class="header-name" to="/">
        <!-- <i class="header-icon">&#xe608;</i> -->
        <i class="glyphicon glyphicon-time"></i>
        <span class="header-title">计划板</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/home">
        <span class="tab-link">首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/time-entries">
        <span class="tab-link">计划列表</span>
      </router-link>
    </div>
    <!-- container -->
    <div class="container" style="margin-top:20px">
      <div class="col-sm-3">
        <v-sidebar></v-sidebar>
      </div>
      <div class="col-sm-7">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    'v-sidebar': sidebar
  }
}
</script>

<style lang="stylus" scoped>
@font-face
  font-family: 'iconfont' /* project id 1223227 */
  src: url('//at.alicdn.com/t/font_1223227_czsi3u6sfu7.eot')
  src: url('//at.alicdn.com/t/font_1223227_czsi3u6sfu7.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1223227_czsi3u6sfu7.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1223227_czsi3u6sfu7.woff') format('woff'),
  url('//at.alicdn.com/t/font_1223227_czsi3u6sfu7.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1223227_czsi3u6sfu7.svg#iconfont') format('svg');

.header
  display flex
  padding-left 30%
  height 60px
  width 100%
  line-height 60px
  font-size 22px
  border-top 2px solid #8a8a8a
  border-bottom 1px solid #8a8a8a
  background-color #cdcdcd
  color #000
  .tab-item
    display inline
    text-align center
    margin-left 10px
    .tab-link
      padding-bottom 5px
      color #8a8a8a
</style>
