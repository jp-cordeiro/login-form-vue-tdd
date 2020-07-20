import { mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";

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
  validations: {
    user: {
      username: {
        required,
      },
      password: {
        required,
      }
    },
  },
  computed: {
    ...mapGetters({
      navigation: "getNavigation",
    }),
    isValid() {
      return !this.$v.$invalid;
    }
  },
  methods: {
    doSignIn() {
      console.log("try login");
    },
    isAttrInvalid(attr) {
      return this.$v.user[attr].$dirty && this.$v.user[attr].$invalid
    }
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
