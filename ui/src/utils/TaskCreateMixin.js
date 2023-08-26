import axios from "axios";

export default () => {
  return {
    data() {
      return {
        task: {
          title: null,
          description: null,
          due_date: null,
          status: false,
        },
        create: true,
      };
    },
    methods: {
      async onUpdate() {
        await this.$store.dispatch('updateTask',{...this.task, id:this.$route.params.id});
        this.$router.push("/");
      },
      async onCreate() {
        await this.$store.dispatch('createTask',this.task);
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
        axios
          .get(`http://localhost:8000/api/task/${id}/edit`)
          .then((response) => {
            console.log("response edit", response);
            // this.$router.push('/');
            this.task = response.data.data;
          })
          .catch((error) => {
            console.error("Error getting data:", error);
          });
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
