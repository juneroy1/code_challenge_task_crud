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
      },
    },
  };
};
