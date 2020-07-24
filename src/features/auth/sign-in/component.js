import { required } from 'vuelidate/lib/validators';
import authMixin from '../../../mixins/auth/auth-mixin';

export default {
  name: 'SignIn',
  mixins: [authMixin],
  data() {
    return {
      user: {
        username: '',
        password: '',
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
      },
    },
  },
  methods: {
    doSignIn() {
      console.log('try login');
    },
  },
};
