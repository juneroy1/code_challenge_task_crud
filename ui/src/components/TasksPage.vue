<template>
  <div>
    <!-- {{ user == null }} -->
    <b-alert :show="user == null" variant="info">
      <div class="d-flex justify-content-center w-100">
        <p>To create, edit or delete task,</p>
        <router-link class="text-start d-flex" to="/login"
          >login first
        </router-link>
      </div>
    </b-alert>

    <router-link v-if="user" class="text-start w-100 d-flex" to="/create"
      >New Task</router-link
    >
    <b-list-group :key="index" v-for="(task, index) in getTask">
      <b-list-group-item>
        <task-page :task="task" @refresh="getTasksList" />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
import TaskPage from "./TaskPage.vue";
import { TaskListMixin } from "../utils/index";
export default {
  name: "TasksPage",
  mixins: [TaskListMixin()],
  components: {
    TaskPage,
  },
};
</script>
