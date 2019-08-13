<template>
  <div class="recommend">
    <!-- 首页整个页面都支持better-scroll滚动 -->
    <ScrollView>
      <ListBlock :movies="playingMovies" :title="`正在热映(${playingCount})`" @more="goMore" @select="selectItem"></ListBlock>
      <div class="space" style="background-color: #f6f6f6"></div>
      <ListBlock :movies="commingMovies" :title="`即将热映(${commingCount})`" @more="goMore" @select="selectItem"></ListBlock>
    </ScrollView>
  </div>
</template>

<script>
import axios from 'axios'
import ListBlock from '@/components/ListBlock.vue'
export default {
  data (){
    return {
      playingMovies: [],
      playingCount: 0,
      commingMovies: [],
      commingCount: 0
    }
  },
  components: {
    ListBlock
  },
  created() {
    this.getMovies()
  },
  methods: {
    getMovies() {
      axios.get('/api/api/movie/get_hot').then(res => {
        console.log(res)
        if (res.data.code === 1001) {
          const { comming, playing } = res.data.result
          this.playingMovies = playing.movies
          this.playingCount = playing.count
          this.commingMovies = comming.movies
          this.commingCount = comming.count
        }
      })
    },
    goMore() {},
    selectItem(id) {
      console.log(id);
      this.$router.push(`/movie/${id}`);
    },
  }
}
</script>

<style scoped>

</style>