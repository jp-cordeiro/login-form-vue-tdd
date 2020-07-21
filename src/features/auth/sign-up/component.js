import { required, sameAs, email } from 'vuelidate/lib/validators';
import authMixin from '../../../mixins/auth/auth-mixin';

export default {
  name: 'SignUp',
  data() {
    return {
      user: {
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
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
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password'),
      },
      email: {
        required,
        email,
      },
    },
  },
  mixins: [authMixin],
  // methods: {
  //   teste() {
  //     console.log('component');
  //   },
  // },
};
