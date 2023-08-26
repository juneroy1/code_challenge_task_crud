<template>
  <div>
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
