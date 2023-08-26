export default () => {
  return {
    data() {
      return {
        tasks: []
      };
    },
    methods: {
        getTasksList(){

        }
    },
    computed: {},
    created(){
        // call api for tasks list
        this.getTasksList()
    }
  };
};
