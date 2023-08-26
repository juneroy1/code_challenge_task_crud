import axios from "axios";

export default () => {
  return {
    props: {
      task: {
        type: Object,
        default: null,
      },
    },
    methods: {
      redirectEditForm(id) {
        this.$router.push(`/edit/${id}`);
        console.log("id", id);
      },
      deleteTask(id) {
        axios
          .delete(`http://localhost:8000/api/task/${id}`)
          .then((response) => {
            console.log("response", response);
            this.$emit('refresh');
          })
          .catch((error) => {
            console.error("Error creating data:", error);
          });
      },
    },
  };
};
