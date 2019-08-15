import Vue from 'vue'
import App from '@/App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  studentData: [
    {name: '蔡徐坤', sex: '男', age: 21},
    {name: '鸡你太美', sex: '女', age: 21},
    {name: '蔡唱', sex: '男', age: 21},
    {name: '蔡跳', sex: '女', age: 21},
    {name: '蔡rap', sex: '男', age: 21},
    {name: '蔡篮球', sex: '女', age: 21}
  ]
}

const getters = {
  getStudents: (state) => {
    let getStudents = state.studentData.map(student => {
      return {
        name: student.name,
        sex: student.sex,
        age: student.age
      }
    })
    return getStudents
  }
}

const mutations = {
  getStuData (state, payload) {
    let newstudent = state.studentData.forEach(student => {
      student.age = student.age + payload
    })
  }
}

const actions = {
  getStuDataAsync (context, payload) {
    setTimeout(() => {
      context.commit('getStuData', payload) // context提交
    }, 1000)
  }
}

export default new Vuex.Store({
  state, getters, mutations, actions
})
