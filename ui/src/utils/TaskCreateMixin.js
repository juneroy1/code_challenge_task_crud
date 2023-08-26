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
            this.$router.push('/');
          })
          .catch((error) => {
            console.error("Error creating data:", error);
          });
      },
    },
  };
};
