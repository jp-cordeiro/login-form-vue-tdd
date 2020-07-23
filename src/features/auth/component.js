import SignIn from '@/features/auth/sign-in/Sign-in';
import SignUp from '@/features/auth/sign-up/Sign-up';

export default {
  name: 'Auth',
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {};
  },
  computed: {
    navigation: {
      get() {
        return this.$store.getters.getNavigation;
      },
      set(value) {
        this.$store.dispatch('setNavigation', value);
      },
    },
  },
  methods: {
    navigate() {
      // console.log(this.navigation);
    },
  },
  created() {
    this.navigation = 'signIn';
  },
};
