<template>
  <div>
    <div class="sign-up-htm">
      <div class="group">
        <label
          for="user"
          :class="{ invalid: isAttrInvalid('username') }"
          @input="$v.user.username.$touch()"
          class="label"
          >Username</label
        >
        <input
          id="user"
          v-model="user.username"
          :class="{ invalid: isAttrInvalid('username') }"
          @input="$v.user.username.$touch()"
          type="text"
          class="input"
        />
      </div>

      <div class="group">
        <label
          for="pass"
          :class="{ invalid: isAttrInvalid('password') }"
          @input="$v.user.password.$touch()"
          class="label"
          >Password</label
        >
        <input
          id="pass"
          v-model="user.password"
          :class="{ invalid: isAttrInvalid('password') }"
          @input="$v.user.password.$touch()"
          type="password"
          class="input"
          data-type="password"
        />
      </div>

      <div class="group">
        <label
          for="pass"
          :class="{ invalid: isAttrInvalid('confirmPassword') }"
          @input="$v.user.confirmPassword.$touch()"
          class="label"
          >Repeat Password</label
        >
        <input
          id="pass"
          v-model="user.confirmPassword"
          :class="{ invalid: isAttrInvalid('confirmPassword') }"
          @input="$v.user.confirmPassword.$touch()"
          type="password"
          class="input"
          data-type="password"
        />
      </div>

      <div class="group">
        <label
          for="pass"
          :class="{ invalid: isAttrInvalid('email') }"
          @input="$v.user.email.$touch()"
          class="label"
          >Email Address</label
        >
        <input
          id="pass"
          v-model="user.email"
          :class="{ invalid: isAttrInvalid('email') }"
          @input="$v.user.email.$touch()"
          type="text"
          class="input"
        />
      </div>
      <div class="group">
        <input type="button" @click="teste" class="button" value="Sign Up" />
      </div>
      <div class="hr"></div>
      <div class="foot-lnk">
        <label for="tab-1">Already Member?</label>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
