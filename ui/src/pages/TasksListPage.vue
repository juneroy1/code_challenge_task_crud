<template>
  <b-container>
    <tasks-page />
  </b-container>
</template>

<script>
import TasksPage from "../components/TasksPage.vue";

export default {
  name: "TasksListPage",
  components: {
    TasksPage,
  },
};
</script>
