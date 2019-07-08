<template>
  <div class="star" :class="starType">
    <span class="star-item" v-for="(starList,index) in starLists" :class="starList" :key="index"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      star: 5,
      star_on: "on",
      star_half: "half",
      star_off: "off"
    };
  },
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return `star-${this.size}`;
    },
    starLists() {
      let list = [];
      let score = Math.floor(this.score);
      let decimal = this.score - score
      for (let i = 0; i < score; i++) {
        // 设置start_on
        list.push(this.star_on);
      }
      if(decimal >= 0.5) {
        list.push(this.star_half)
      }
      while (list.length < this.star) {
        // 剩余不亮的星星
        list.push(this.star_off);
      }
      return list;
    }
  }
};
</script>
<style lang='stylus'>
@import '../../common/stylus/mixin.styl';

.star {
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-36 {
    .star-item {
      width: 14px;
      height: 14px;
      margin-right: 4px;
      background-size: 14px 14px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('star36_on');
      }

      &.half {
        bg-image('star36_half');
      }

      &.off {
        bg-image('star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 8px;
      height: 8px;
      margin-right: 2px;
      background-size: 8px 8px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('star24_on');
      }

      &.half {
        bg-image('star24_half');
      }

      &.off {
        bg-image('star24_off');
      }
    }
  }
}
</style>