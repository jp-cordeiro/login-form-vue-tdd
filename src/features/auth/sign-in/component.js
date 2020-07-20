import { mapGetters } from "vuex";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        username: "",
        password: "",
        keepSignedIn: true,
      },
    };
  },
  computed: {
    ...mapGetters({
      navigation: "getNavigation",
    }),
  },
  methods: {
    doSignIn() {
      console.log("try login");
    },
  },
  watch: {
    navigation(newValue) {
      if (newValue === "signUp") {
        this.user = {
          username: "",
          password: "",
          keepSignedIn: true,
        };
      }
    },
  },
};
