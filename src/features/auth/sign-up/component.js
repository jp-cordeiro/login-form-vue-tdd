export default {
  name: "SignUp",
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: "",
        emailConfirm: "",
      },
    };
  },
  watch: {
    navigation(newValue) {
      if (newValue === "signIp") {
        this.user = {
          username: "",
          password: "",
          email: "",
          emailConfirm: "",
        };
      }
    },
  },
};
