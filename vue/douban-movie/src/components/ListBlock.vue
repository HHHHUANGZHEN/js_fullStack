<template>
  <section class="list-block">
    <div class="info" @click="$emit('more')">
      <h1 class="title">{{ title }}</h1> 
      <i class="iconfont icon-right"></i>
    </div>
    <div v-if="movies.length" class="list">
      <div class="item" v-for="item in movies" :key="item._id" @click="$emit('select',item._id)">
        <div class="image">
          <img :src="item.poster" alt="" width="100%" height="100%"/>
          <em v-if="item.isPlay === 1" class="rate">{{item.rate}}</em> 
          <!-- v-if：当隐藏结构时该结构会直接从整个dom树中移除；
          v-show：当隐藏结构时是在该结构的style中加上display:none，结构依然保留。 -->
        </div>
        <p class="title">{{item.title}}</p>
      </div>
    </div>
    <div v-else class="loading-wrap">
      <Loading />
    </div>
  </section>
  
</template>

<script>
export default {
  name: 'ListBlock',
  props: {
    title: {
      type: String,
      required: true
    },
    movies: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-block
  padding 15px
  min-height 100px
  text-align center
  .info
    display flex
    justify-content space-between
    margin-bottom 15px
    font-weight bold
    font-size 20px
    .iconfont
      font-size 20px
  .list
    display flex
    justify-content space-between
    flex-wrap wrap
    .item
      width 24%
      .image
        position relative
        height: 80%;
        .rate
          position absolute
          right 5px
          bottom 2px
          color #ffb400
          font-weight bold
          font-style italic
      .title
        padding: 10px 0
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        font-size 14px
  .loading-wrap
    display flex
    align-items center
    height 200px
</style>