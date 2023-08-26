<template>
  <div>
    {{ task.title }}
  </div>
</template>
<script>
import { TaskMixin } from '@/utils';

export default {
  name: "TaskPage",
  mixins: [TaskMixin()]
 
};
</script>
