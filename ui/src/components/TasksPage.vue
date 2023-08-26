<template>
  <div>
    <router-link class="text-start w-100 d-flex" to="/create">New Task</router-link>
    <b-list-group :key="index" v-for="(task, index) in tasks">
      <b-list-group-item>
        <task-page :task="task" />
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
