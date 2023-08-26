import axios from "axios";
export default () => {
  return {
    data() {
      return {
        tasks: [],
      };
    },
    methods: {
      getTasksList() {
        axios
          .get("http://localhost:8000/api/task")
          .then((response) => {
            console.log("response", response);
            this.tasks = response.data.data;
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      },
    },
    computed: {},
    created() {
      // call api for tasks list
      this.getTasksList();
    },
  };
};
