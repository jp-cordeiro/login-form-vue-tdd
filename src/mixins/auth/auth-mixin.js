import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      navigation: 'getNavigation',
    }),
    isValid() {
      return !this.$v.$invalid;
    },
  },
  methods: {
    isAttrInvalid(attr) {
      return this.$v.user[attr].$dirty && this.$v.user[attr].$invalid;
    },
    teste() {
      console.log('mixin');
    },
  },
  watch: {
    navigation(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        for (let _attr in this.user) {
          this.user[_attr] = '';
        }

        this.$v.$reset();
      }
    },
  },
};
