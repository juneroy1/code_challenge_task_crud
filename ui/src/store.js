import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // Define your initial state here
    tasks: [],
  },
  mutations: {
    setTasks(state, newData) {
      state.tasks = newData;
    },
  },
  actions: {
    getTaskList({ commit }) {
        axios
          .get(`${process.env.VUE_APP_LOCAL_SERVER}api/task`)
          .then((response) => {
            console.log("response", response);
            const tasks = response.data.data;
            commit("setTasks", tasks);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
    },
    deleteTask({ dispatch }, payload) {
        axios
          .delete(`${process.env.VUE_APP_LOCAL_SERVER}api/task/${payload.id}`)
          .then((response) => {
            console.log("response", response);
            dispatch("getTaskList");
          })
          .catch((error) => {
            console.error("Error creating data:", error);
          });
    },
  },
  getters: {
    getData: (state) => state.tasks,
  },
});

export default store;
