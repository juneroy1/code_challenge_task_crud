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
      onSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log("task", this.task);
        axios
          .post("http://localhost:8000/api/task", this.task)
          .then((response) => {
            console.log("response", response);
            this.$router.push("/");
          })
          .catch((error) => {
            console.error("Error creating data:", error);
          });
      },
      getTaskDetails(id) {
        axios
          .get(`http://localhost:8000/api/task/${id}/edit`)
          .then((response) => {
            console.log("response edit", response);
            // this.$router.push('/');
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
