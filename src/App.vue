<template>
  <div>
    <Auth></Auth>
  </div>
</template>

<script>
import Auth from '@/features/auth/Auth';

export default {
  components: {
    Auth,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  color: #6a6f8c;
  background: #c8c8c8;
  font: 600 16px/18px 'Open Sans', sans-serif;
}
*,
:after,
:before {
  box-sizing: border-box;
}
.clearfix:after,
.clearfix:before {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
  display: block;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
