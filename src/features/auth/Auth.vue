<template>
  <div>
    <div class="login-wrap">
      <div class="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          class="sign-in"
          :checked="true"
          value="signIn"
          v-model="navigation"
          @change="navigate"
        />
        <label for="tab-1" class="tab">Sign In</label>
        <input
          id="tab-2"
          type="radio"
          name="tab"
          class="sign-up"
          value="signUp"
          v-model="navigation"
          @change="navigate"
        />
        <label for="tab-2" class="tab">Sign Up</label>
        <div class="login-form">
          <SignIn></SignIn>
          <SignUp></SignUp>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>

<style lang="scss">
@import "./style";
</style>
