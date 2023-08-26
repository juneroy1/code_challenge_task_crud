<template>
    <div>
        <b-list-group>
          <b-list-group-item>Cras justo odio</b-list-group-item>
        </b-list-group>
    </div>
</template>
<script>
import {TaskListMixin} from '../utils/index'
export default {
    name: "TasksPage",
    mixins:[TaskListMixin()]
}

</script>