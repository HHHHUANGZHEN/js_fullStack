<template>
  <div>
    <!-- 没有log时 -->
    <router-link v-if="$route.path !== '/time-entries/log'" to='/time-entries/log' class="btn btn-primary">创建</router-link>
    <!-- 有log时 -->
    <div v-if="$route.path === '/time-entries/log'">创建</div>
    <router-view></router-view>
    <!-- 内容 -->
    <div class="time-entries">
      <p v-if="!plans.length">还没有任何计划</p>
      <!-- 列表 -->
      <div class="list-group" v-if="plans.length">
        <div class="list-group-item" v-for="(plan, index) in plans" :key="index">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img :src="plan.avatar" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  {{ plan.name }}
                </strong>
              </p>
            </div>
            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>
            <div class="col-sm-7 comment-section">
              <p>{{ plan.comment }}</p>
            </div>
            <div class="col-sm-1">
              <button class="btn btn-xs btn-danger delete-button" @click="deletePlan(index)">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    plans() {
      return this.$store.state.plans
    }
  },
  methods: {
    deletePlan(index) {
      this.$store.dispatch('deletePlan', index)
      this.$store.dispatch('decTotalTime', this.$store.plans[index].totalTime)
    }
  },
}
</script>

<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
