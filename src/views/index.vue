<template>
  <div>
    <h2>vuex学习使用案例</h2>
    <div class="test">
      <ul>
        <li><span>姓名</span><span>性别</span><span>年龄</span></li>
        <li v-for="(student,index) in students" :key="index">
          <span class="name">{{ student.name }}</span>
          <span class="sex">{{ student.sex}}</span>
          <span class="sex">{{ student.age}}</span>
        </li>
        <button @click="getStuData">增加年龄</button>
        <button @click="getStuDataAsync">异步增加年龄</button>
      </ul>
    </div>
  </div>
</template>

<script>
// import store from '@/store/store.js'
import store from '@/store/store.js';
export default {
  name: 'index',
  data() {
    return {
      students : this.$store.state.studentData
    };
  },
  mounted() {
  },
  methods: {
    getStuData() {
        this.$store.commit('getStuData', 2); //提交`getStuData,payload为2
    },
    getStuDataAsync() {
        this.$store.dispatch('getStuDataAsync', 3); //分发actions中的getStuDataAsync这个异步函数
    }
  },
  components: {
  }
};
</script>

<style>
  .test ul li{
    width: 500px;
    height: 50px;
    list-style: none;
    margin: 0 auto;
    border: #42B983 1px solid;
  }
  .test ul li span{
    width: 33%;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    float: left;
  }
  button{
    width: 150px;
    height: 50px;
    margin: 20px;
    background: #42B983;
    color: #fff;
    border: 0;
    font-size: 20px;
    border-radius: 5px;
  }
</style>
