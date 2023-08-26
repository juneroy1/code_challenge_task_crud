

export default () => {
  return {
    props: {
      task: {
        type: Object,
        default: null,
      },
    },
    methods: {
      redirectEditForm(id){
        this.$router.push(`/edit/${id}`);
        console.log('id',id)
      }
    }
  };
};
