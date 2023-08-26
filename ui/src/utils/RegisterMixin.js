export default () => {
    return {
      data() {
        return {
          registerDetails: {
            name: null,
            email: null,
            password: null,
            c_password: null,
          },
        };
      },
      methods: {
        async register(e) {
          e.preventDefault()
          await this.$store.dispatch("registerNow", this.registerDetails)
          this.$router.push("/login");
          
      },
      },
    };
  };
  