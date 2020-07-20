<template>
  <div>
    <form action="#" @submit.prevent class="sign-in-htm">
      <div class="group">
        <label for="user" class="label">Username</label>
        <input id="user" type="text" class="input" v-model="user.username" />
      </div>
      <div class="group">
        <label for="pass" class="label">Password</label>
        <input
          id="pass"
          type="password"
          class="input"
          data-type="password"
          v-model="user.password"
        />
      </div>
      <div class="group">
        <input
          id="check"
          type="checkbox"
          class="check"
          v-model="user.keepSignedIn"
        />
        <label for="check">
          <span class="icon"></span> Keep me Signed in
        </label>
      </div>
      <div class="group">
        <input type="submit" class="button" value="Sign In" @click="doSignIn" />
      </div>
      <div class="hr"></div>
      <div class="foot-lnk">
        <a href="#forgot">Forgot Password?</a>
      </div>
    </form>
  </div>
</template>

<script src="./component.js"></script>
