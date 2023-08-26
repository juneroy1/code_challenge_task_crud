// import axios from "axios";
import { mapState } from "vuex";

export default () => {
  return {
    data() {
      return {
        create: true,
      };
    },
    methods: {
      async onUpdate() {
        await this.$store.dispatch("updateTask", {
          ...this.getTask,
          id: this.$route.params.id,
        });
        this.$router.push("/");
      },
      async onCreate() {
        await this.$store.dispatch("createTask", this.getTask);
        this.$router.push("/");
      },
      onSubmit(e) {
        e.preventDefault();
        if (this.create) {
          this.onCreate();
        } else {
          this.onUpdate();
        }
      },
      getTaskDetails(id) {
        this.$store.dispatch("getTask", { id });
      },
    },
    computed: {
      ...mapState(["taskDetails"]),
      getTask() {
        return this.taskDetails;
      },
    },
    created() {
      if (this.$route.params.id) {
        this.getTaskDetails(this.$route.params.id);
        this.create = false;
      }
    },
  };
};
