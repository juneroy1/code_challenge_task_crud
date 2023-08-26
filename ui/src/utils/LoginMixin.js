export default () => {
  return {
    data() {
      return {
        loginDetails: {
          email: null,
          password: null,
        },
      };
    },
    methods: {
      async login(e) {
        e.preventDefault()
        await this.$store.dispatch("loginNow", this.loginDetails)
        this.$router.push("/");
    },
    },
  };
};
