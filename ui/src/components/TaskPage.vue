<template>
  <div>
    {{ task.title }}
  </div>
</template>
<script>
export default {
  name: "TaskPage",
  props: {
    task: {
      type: Object,
      default: null,
    },
  },
};
</script>
