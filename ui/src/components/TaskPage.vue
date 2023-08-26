<template>
  <div>
    <div class="d-flex flex-row justify-content-start align-items-start">
      <b-container
        class="d-flex flex-column justify-content-start align-items-start"
      >
        <h3>
          {{ task.title }}
        </h3>
        <p>{{ task.description }}</p>
      </b-container>
      <div class="d-flex flex-column justify-content-start align-items-end">
        <b-container
          v-if="user"
          class="d-flex flex-row justify-content-start align-items-end"
        >
          <b-button
            class="mx-2"
            @click="redirectEditForm(task.id)"
            variant="primary"
            >Edit</b-button
          >
          <b-button @click="deleteTask(task.id)" variant="danger"
            >Delete</b-button
          >
        </b-container>
      </div>
    </div>
  </div>
</template>
<script>
import { TaskMixin } from "@/utils";

export default {
  name: "TaskPage",
  mixins: [TaskMixin()],
};
</script>
