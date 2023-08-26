// import axios from "axios";
import { mapState } from 'vuex';
export default () => {
  return {
    data() {
      return {
      };
    },
    methods: {
      getTasksList() {
        this.$store.dispatch('getTaskList');
      },
    },
    computed: {
      ...mapState(['tasks']),
      getTask(){
        return this.tasks
      }
    },
    created() {
      // call api for tasks list
      this.getTasksList();
    },
  };
};
