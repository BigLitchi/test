import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:"1000",
    stu:{
      name:"jack",
      age:20
    }
     

    
  },
  mutations: {
    onRegit(state,testname){
        state.stu.name = testname;
       
    }
    // state.counter = testname;
    // Vue.set(state.stu,'address','LA')
  },
  actions: {
  },
  modules: {
  }
})
