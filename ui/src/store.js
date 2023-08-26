/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // Define your initial state here
    tasks: [],
    taskDetails: {
      title: null,
      description: null,
      due_date: null,
      status: false,
    },
    user: null,
  },
  mutations: {
    setTasks(state, newData) {
      state.tasks = newData;
    },
    setTask(state, newData) {
      state.taskDetails = newData;
    },
    setUser(state, newData) {
      state.user = newData;
    },
  },
  actions: {
    getUser({ commit }) {
      commit("setUser", null);
      const token = localStorage.getItem("userToken");
      axios
        .get(`${process.env.VUE_APP_LOCAL_SERVER}api/user`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("getUser", response);
          //   const tasks = response.data.data;
          commit("setUser", response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    async registerNow({ commit }, payload) {
      const result = await axios.post(
        `${process.env.VUE_APP_LOCAL_SERVER}api/register`,
        payload,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (result.status === 200) {
        return true;
      }
      return false;
    },
    async loginNow({ commit }, payload) {
      const result = await axios.post(
        `${process.env.VUE_APP_LOCAL_SERVER}api/login`,
        payload,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (result.status === 200) {
        localStorage.setItem("userToken", result.data.data.token);
        return true;
      }
      return false;
    },
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
      const token = localStorage.getItem("userToken");

      axios
        .delete(`${process.env.VUE_APP_LOCAL_SERVER}api/task/${payload.id}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("response", response);
          dispatch("getTaskList");
        })
        .catch((error) => {
          console.error("Error creating data:", error);
        });
    },
    async updateTask({ commit }, payload) {
      const token = localStorage.getItem("userToken");

      console.log("payload", payload);
      const result = await axios.put(
        `${process.env.VUE_APP_LOCAL_SERVER}api/task/${payload.id}`,
        payload,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("result", result);
      if (result.status == 200) {
        return;
      }
    },
    async createTask({ commit }, payload) {
      const token = localStorage.getItem("userToken");

      console.log("payload", payload);
      const result = await axios.post(
        `${process.env.VUE_APP_LOCAL_SERVER}api/task`,
        payload,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("result", result);
      if (result.status == 200) {
        return;
      }
    },
    getTask({ commit }, payload) {
      const token = localStorage.getItem("userToken");

      axios
        .get(`${process.env.VUE_APP_LOCAL_SERVER}api/task/${payload.id}/edit`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("response", response);
          const task = response.data.data;
          commit("setTask", task);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
//   getters: {
//     getData: (state) => state.tasks,
//   },
});

export default store;
