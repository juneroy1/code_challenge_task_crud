<template>
  <div>
    <div class="d-flex flex-column justify-content-start align-items-start">
      <h3>
        {{ task.title }}
      </h3>
      <p>{{ task.description }}</p>
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
